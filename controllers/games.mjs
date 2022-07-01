import axios from 'axios';
import sequelizePackage from 'sequelize';
const { Sequelize } = sequelizePackage;
// const { Sequelize } = 'sequelize';

export default function initGamesController(db) {
  /**
   * TODO
   * GETTING THE WORDS FOR THE BOMB
   * 1. Get wordlist from API and splice out the start/middle/end of the word.
   * 2. Save that 3 letters into game_state JSON under "word".
   * -----
   * RETRIEVING THE INPUT FROM USER & CHECKING IT
   * 1. Input from user will send a AJAX GET to the server.
   * 2. Server will check if the word is correct and send a response if answer is correct or wrong.
   * -----
   * OTHER THINGS TO SEND TO FRONTEND
   * 1. Timer (saved in game_state JSON)
   *  - Randomly generate based on input from FRONTEND (eg, at least 3secs/5secs/8secs)
   * 2. Player's lives
   */

  const getWord = async (req, res) => {
    const { difficulty } = req.body;
    const randomWord = await db.Word.findOne({
      order: [db.Sequelize.fn('RANDOM')],
    });
    const gameDifficulty = difficulty;
    const word = randomWord.word;
    if (gameDifficulty === 'Easy') {
      const slicedWord = word.slice(0, 3);
      console.log(`easy: ${slicedWord}`);
      res.send(slicedWord);
    } else if (gameDifficulty === 'Medium') {
      const slicedWord = word.slice(1, 4);
      console.log(`medium: ${slicedWord}`);
      res.send(slicedWord);
    } else if (gameDifficulty === 'Hard') {
      const slicedWord = word.slice(2, 5);
      console.log(`hard: ${slicedWord}`);
      res.send(slicedWord);
    }
  };

  const checkWord = async (req, res) => {
    const guess = req.body.input;
    console.log(`guess: ${guess}`);
    const Op = Sequelize.Op;
    try {
      const check = await db.Word.findAll({
        where: {
          word:
            // [Op.like]: `%${guess}`,
            guess,
        },
        // raw: true,
      });
      // console.log(check);
      if (check.length >= 1) {
        console.log('✅ correct word');
        res.send('Correct');
      } else {
        console.log('❌ wrong word');
        res.send('Wrong');
      }
    } catch (err) {
      console.log(`Word check error: ${err}`);
    }
  };

  // create the gamestate
  const create = async (req, res) => {
    console.log('backend', req.body);
    const duration = parseInt(req.body.duration);
    const lives = parseInt(req.body.lives);
    const players = parseInt(req.body.players);
    const loginUser = parseInt(req.cookies.userId);
    try {
      // find game in progress or create new game
      if (players === 1) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser },
          },
          defaults: {
            gameState: {
              gameOwner: loginUser,
              duration: duration,
              players: players,
              lives: {
                player1: lives,
                // player2: lives,
                // player3: lives,
                // player4: lives
              },
            },
          },
        });
        console.log('1 player game created/joined');
        // if game is joined / created then create game in through table
        if (created) {
          const currentPlayer = await db.User.findOne({
            where: {
              id: loginUser,
            },
          });
          // add game to join table
          const joinTableEntry = await currentGame.addUser(currentPlayer);
        }
        res.send({
          id: currentGame.id,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
        });
      } else if (players === 2) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser },
          },
          defaults: {
            gameState: {
              gameOwner: loginUser,
              duration: duration,
              players: players,
              lives: {
                player1: lives,
                player2: lives,
                // player3: lives,
                // player4: lives
              },
            },
          },
        });
        console.log('2 player game created/joined');
        // if game is joined / created then create game in through table
        if (created) {
          const currentPlayer = await db.User.findOne({
            where: {
              id: loginUser,
            },
          });
          // add game to join table
          const joinTableEntry = await currentGame.addUser(currentPlayer);
        }
        res.send({
          id: currentGame.id,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
        });
      } else if (players === 3) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser },
          },
          defaults: {
            gameState: {
              gameOwner: loginUser,
              duration: duration,
              players: players,
              lives: {
                player1: lives,
                player2: lives,
                player3: lives,
                // player4: lives
              },
            },
          },
        });
        console.log('3 player game created/joined');
        // if game is joined / created then create game in through table
        if (created) {
          const currentPlayer = await db.User.findOne({
            where: {
              id: loginUser,
            },
          });
          // add game to join table
          const joinTableEntry = await currentGame.addUser(currentPlayer);
        }
        res.send({
          id: currentGame.id,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
        });
      } else if (players === 4) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser },
          },
          defaults: {
            gameState: {
              gameOwner: loginUser,
              duration: duration,
              players: players,
              lives: {
                player1: lives,
                player2: lives,
                player3: lives,
                player4: lives,
              },
            },
          },
        });
        console.log('4 player game created/joined');
        // if game is joined / created then create game in through table
        if (created) {
          const currentPlayer = await db.User.findOne({
            where: {
              id: loginUser,
            },
          });
          // add game to join table
          const joinTableEntry = await currentGame.addUser(currentPlayer);
        }
        res.send({
          id: currentGame.id,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
        });
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  // TODO
  const resetGame = async (req, res) => {
    //   try {
    //     const currentGameId = req.params.id;
    //     const currentGame = await db.Game.findByPk(currentGameId);
    //     const deleteGame_users = await db.User_games.destroy({
    //       where: { game_id: currentGameId },
    //     });
    //     const deleteGame = await currentGame.destroy({
    //       where: { id: currentGameId },
    //     });
    //   } catch (err) {
    //     console.log(`Logout error: ${err}`);
    //   }
    // };
  };

  return {
    create,
    resetGame,
    getWord,
    checkWord,
  };
}

initGamesController();
