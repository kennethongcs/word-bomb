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

  // const loginCheck = async (req, res, next) => {
  //   req.isUserLoggedIn = false;
  //   if (req.cookies.userId && req.cookies.sessionId) {
  //     const hash = getHashSalted(req.cookies.userId);
  //     if (req.cookies.sessionId === hash) {
  //       req.isUserLoggedIn = true;
  //       req.user = req.cookies.userId;
  //       next();
  //     }
  //   }
  //   next();
  // };

  // const userState = async (req, res, next) => {
  //   app.locals.user = req.user;
  //   next();
  // };

  return { root, login };
}
