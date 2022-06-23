import axios from 'axios';

const getWord = async (difficulty) => {
  axios
    .get('https://random-word-api.herokuapp.com/word')
    .then((result) => {
      const gameDifficulty = difficulty;
      const word = result.data[0];
      if (gameDifficulty === 'easy') {
        const slicedWord = word.slice(0, 3);
        return slicedWord;
      } else if (gameDifficulty === 'medium') {
        const slicedWord = word.slice(1, 4);
        return slicedWord;
      } else if (gameDifficulty === 'hard') {
        const slicedWord = word.slice(2, 5);
        console.log(slicedWord);
        return slicedWord;
      }
    })
    .catch((err) => console.log(`Error getting word from api: ${err}`));
};

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

  // create the gamestate
  const create = async (req, res) => {};

  return {
    create,
  };
}

initGamesController();
