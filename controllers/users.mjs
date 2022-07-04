import jsSHA from 'jssha';
import express from 'express';

const app = express();

const getHashSalted = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  const SALT = 'dfaenl431';
  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${SALT}`;

  // generate a hashed cookie string using SHA object
  shaObj.update(unhashedString);

  return shaObj.getHash('HEX');
};

export default function initUsersController(db) {
  const root = (req, res) => {
    res.render('main');
  };

  const login = async (req, res) => {
    try {
      const userDetails = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });
      // console.log('user', user);

      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
        attributes: { exclude: ['password'] },
      });

      const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
      shaObj.update(req.body.password);
      const hashedPassword = shaObj.getHash('HEX');

      if (hashedPassword === userDetails.password) {
        res.cookie('loggedIn', true);
        res.cookie('userId', userDetails.id);
        const saltedUserId = getHashSalted(userDetails.Id);
        res.cookie('sessionId', saltedUserId);
        res.send({ user });
      } else {
        console.log('not logged in ');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (req, res) => {
    res.clearCookie('userId');
    res.clearCookie('sessionId');
    res.clearCookie('loggedIn');
    res.redirect('/');
  };

  const user = async (req, res) => {
    const userId = req.cookies.userId;

    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    });

    res.send(user);
  };

  return { root, login, logout, user };
}
