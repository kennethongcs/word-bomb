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
}
