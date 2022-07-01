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
            gameState: { gameOwner: loginUser, status: 'active' },
          },
          defaults: {
            gameState: {
              status: 'active',
              gameOwner: loginUser,
              duration: duration,
              players: players,
              currentPlayer: 1,
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
          gameOwner: currentGame.gameState.gameOwner,
          status: currentGame.gameState.status,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
          currentPlayer: currentGame.gameState.currentPlayer,
        });
      } else if (players === 2) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser, status: 'active' },
          },
          defaults: {
            gameState: {
              status: 'active',
              gameOwner: loginUser,
              duration: duration,
              players: players,
              currentPlayer: 1,
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
          gameOwner: currentGame.gameState.gameOwner,
          status: currentGame.status,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
          currentPlayer: currentGame.gameState.currentPlayer,
        });
      } else if (players === 3) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser, status: 'active' },
          },
          defaults: {
            gameState: {
              status: 'active',
              gameOwner: loginUser,
              duration: duration,
              players: players,
              currentPlayer: 1,
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
          gameOwner: currentGame.gameState.gameOwner,
          status: currentGame.gameState.status,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
          currentPlayer: currentGame.gameState.currentPlayer,
        });
      } else if (players === 4) {
        const [currentGame, created] = await db.Game.findOrCreate({
          where: {
            gameState: { gameOwner: loginUser, status: 'active' },
          },
          defaults: {
            gameState: {
              status: 'active',
              gameOwner: loginUser,
              duration: duration,
              players: players,
              currentPlayer: 1,
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
          gameOwner: currentGame.gameState.gameOwner,
          status: currentGame.gameState.status,
          duration: currentGame.gameState.duration,
          players: currentGame.gameState.players,
          lives: currentGame.gameState.lives,
          currentPlayer: currentGame.gameState.currentPlayer,
        });
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const resetGame = async (req, res) => {
    try {
      const currentGameId = req.params.id;
      const currentGame = await db.Game.findOne({
        where: { id: currentGameId },
      });
      const updateGameStatus = await currentGame.update({
        gameState: {
          status: 'completed',
        },
      });
      res.send('Game ended');
    } catch (err) {
      console.log(`Logout error: ${err}`);
    }
  };

  // DOING
  const nextPlayer = async (req, res) => {
    try {
      // get current player
      console.log(req.body);
      const data = req.body.CURRENT_GAME;
      let currentPlayer = data.currentPlayer;
      const { players } = data;
      const { id } = data;
      const { loginUser } = data;
      const { duration } = data;

      // increase current player by 1
      console.log('currentplayer', currentPlayer);
      currentPlayer += 1;
      // if currentPlayer > players, change back to 1
      if (currentPlayer > players) {
        currentPlayer = 1;
      }
      console.log('currentplayerafter', currentPlayer);
      // get currentGame
      const currentGame = await db.Game.findOne({
        where: { id: id },
      });
      // update currentPlayer in game_state
      if (players === 1) {
        const player1lives = data.lives.player1;
        const updateGameState = await currentGame.update({
          gameState: {
            status: 'active',
            gameOwner: loginUser,
            duration: duration,
            players: players,
            currentPlayer: currentPlayer,
            lives: {
              player1: player1lives,
              // player2: lives,
              // player3: lives,
              // player4: lives
            },
          },
        });
        res.send({
          id: updateGameState.id,
          status: updateGameState.gameState.status,
          duration: updateGameState.gameState.duration,
          players: updateGameState.gameState.players,
          lives: updateGameState.gameState.lives,
          currentPlayer: updateGameState.gameState.currentPlayer,
        });
      }
      if (players === 2) {
        console.log(`2 player game`);
        const player1lives = data.lives.player1;
        const player2lives = data.lives.player2;
        const updateGameState = await currentGame.update({
          gameState: {
            status: 'active',
            gameOwner: loginUser,
            duration: duration,
            players: players,
            currentPlayer: currentPlayer,
            lives: {
              player1: player1lives,
              player2: player2lives,
              // player3: lives,
              // player4: lives
            },
          },
        });
        res.send({
          id: updateGameState.id,
          status: updateGameState.gameState.status,
          duration: updateGameState.gameState.duration,
          players: updateGameState.gameState.players,
          lives: updateGameState.gameState.lives,
          currentPlayer: updateGameState.gameState.currentPlayer,
        });
      }
      if (players === 3) {
        const player1lives = data.lives.player1;
        const player2lives = data.lives.player2;
        const player3lives = data.lives.player3;
        const updateGameState = await currentGame.update({
          gameState: {
            status: 'active',
            gameOwner: loginUser,
            duration: duration,
            players: players,
            currentPlayer: currentPlayer,
            lives: {
              player1: player1lives,
              player2: player2lives,
              player3: player3lives,
              // player4: lives
            },
          },
        });
        res.send({
          id: updateGameState.id,
          status: updateGameState.gameState.status,
          duration: updateGameState.gameState.duration,
          players: updateGameState.gameState.players,
          lives: updateGameState.gameState.lives,
          currentPlayer: updateGameState.gameState.currentPlayer,
        });
      }
      if (players === 4) {
        const player1lives = data.lives.player1;
        const player2lives = data.lives.player2;
        const player3lives = data.lives.player3;
        const player4lives = data.lives.player4;
        const updateGameState = await currentGame.update({
          gameState: {
            status: 'active',
            gameOwner: loginUser,
            duration: duration,
            players: players,
            currentPlayer: currentPlayer,
            lives: {
              player1: player1lives,
              player2: player2lives,
              player3: player3lives,
              player4: player4lives,
            },
          },
        });
        res.send({
          id: updateGameState.id,
          status: updateGameState.gameState.status,
          duration: updateGameState.gameState.duration,
          players: updateGameState.gameState.players,
          lives: updateGameState.gameState.lives,
          currentPlayer: updateGameState.gameState.currentPlayer,
        });
      }
    } catch (err) {
      console.log(`Next player error: ${err}`);
    }
  };

  return {
    create,
    resetGame,
    getWord,
    checkWord,
    nextPlayer,
  };
}

initGamesController();
