let CURRENT_GAME;

const topBar = document.querySelector('.top');
const bottomBar = document.querySelector('.start-btn-div');
const gameDiv = document.querySelector('.game-display');
const canvas = document.querySelector('.canvas');

// login div
const loginDiv = document.createElement('div');
loginDiv.classList.add('login-div');
gameDiv.appendChild(loginDiv);

// email input in login div
const emailDiv = document.createElement('div');
emailDiv.classList.add('email');
loginDiv.appendChild(emailDiv);
const emailLabel = document.createElement('label');
emailLabel.classList.add('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email: ';
emailDiv.appendChild(emailLabel);
const emailInput = document.createElement('input');
emailInput.classList.add('input-box');
emailInput.setAttribute('id', 'email');
emailDiv.appendChild(emailInput);

// password input
const passwordDiv = document.createElement('div');
passwordDiv.classList.add('password');
loginDiv.appendChild(passwordDiv);
const passwordLabel = document.createElement('label');
passwordLabel.classList.add('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password: ';
passwordDiv.appendChild(passwordLabel);
const passwordInput = document.createElement('input');
passwordInput.classList.add('input-box');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('type', 'password');
passwordDiv.appendChild(passwordInput);

// submit login button
const loginBtnDiv = document.createElement('div');
loginBtnDiv.classList.add('login-btn-div');
const loginBtn = document.createElement('button');
loginDiv.appendChild(loginBtnDiv);
loginBtn.classList.add('login-btn', 'btn');
loginBtn.setAttribute('type', 'submit');
loginBtn.textContent = 'Login';
loginBtnDiv.appendChild(loginBtn);

// bottom banner
const startGameBtn = document.createElement('button');
bottomBar.classList.add('hidden');
startGameBtn.classList.add('start-btn', 'btn');
startGameBtn.setAttribute('type', 'btn');
startGameBtn.textContent = 'Start Game';
bottomBar.appendChild(startGameBtn);

// top banner
const gameId = document.querySelector('.game_id');
const userId = document.querySelector('.user');
const loginLogoutDiv = document.querySelector('.login-btn-div');

// instructions
const instructionDiv = document.querySelector('.instructions');
const instructionText = document.createElement('p');
instructionText.textContent = 'Please Login to Continue';
instructionDiv.appendChild(instructionText);

// show rules button
const rulesBtn = document.createElement('button');
rulesBtn.classList.add('rules-btn', 'btn');
rulesBtn.setAttribute('type', 'btn');
rulesBtn.textContent = 'Edit rules';

// end game button
const endGameBtn = document.createElement('button');
endGameBtn.classList.add('endgame-btn', 'btn');
endGameBtn.setAttribute('type', 'btn');
endGameBtn.textContent = 'End game';

// settings pane
const settings = document.createElement('div');
settings.classList.add('settings-pane', 'hidden');
const tutorial = document.createElement('div');
const helperHeader = document.createElement('p');
helperHeader.classList.add('helper-header');
const helperText = document.createElement('p');
helperText.classList.add('helper-text');
helperHeader.textContent = 'How to Play';
helperText.textContent =
  'Type a word that contains the letter in the 💣. However, if the bomb explodes, you lose a life!';
settings.appendChild(tutorial);
tutorial.appendChild(helperHeader);
tutorial.appendChild(helperText);
gameDiv.appendChild(settings);

// add min turn duration setting in settings pane
const minDurationPerTurn = document.createElement('div');
minDurationPerTurn.classList.add('minDurationPerTurn', 'setting');
const minDurationPerTurnLabel = document.createElement('label');
minDurationPerTurnLabel.classList.add('minDurationPerTurnLabel');
minDurationPerTurnLabel.textContent =
  '⌚ Min turn duration per turn. (1 - 10secs)';
const minDurationPerTurnRangeDiv = document.createElement('div');
const minDurationPerTurnRangeLabel = document.createElement('label');
minDurationPerTurnRangeLabel.classList.add('helper-text');
minDurationPerTurnRangeLabel.textContent = 'Input duration: ';
minDurationPerTurnRangeDiv.classList.add('range');
// input FYI
const minDurationInputNo = document.createElement('input');
minDurationInputNo.defaultValue = 5;
minDurationInputNo.classList.add('minDurationNumber');
minDurationInputNo.setAttribute('type', 'number');
minDurationInputNo.setAttribute('min', '1');
minDurationInputNo.setAttribute('max', '10');

minDurationPerTurn.appendChild(minDurationPerTurnLabel);
minDurationPerTurn.appendChild(minDurationPerTurnRangeDiv);
minDurationPerTurn.appendChild(minDurationPerTurnRangeLabel);
minDurationPerTurn.appendChild(minDurationInputNo);
settings.appendChild(minDurationPerTurn);

// add starting lives in settings pane
const startingLives = document.createElement('div');
startingLives.classList.add('starting-lives', 'setting');
const startingLivesLabel = document.createElement('label');
startingLivesLabel.classList.add('starting-lives-label');
startingLivesLabel.textContent = '🧡 Starting lives. (1 - 5)';
const startingLivesDiv = document.createElement('div');
const startingLivesRangeLabel = document.createElement('label');
startingLivesRangeLabel.classList.add('helper-text');
startingLivesRangeLabel.textContent = 'Input lives: ';
startingLivesDiv.classList.add('range');
// input FYI
const startingLivesInputNo = document.createElement('input');
startingLivesInputNo.defaultValue = 2;
startingLivesInputNo.classList.add('start-lives-number');
startingLivesInputNo.setAttribute('type', 'number');
startingLivesInputNo.setAttribute('min', '1');
startingLivesInputNo.setAttribute('max', '5');

startingLives.appendChild(startingLivesLabel);
startingLives.appendChild(startingLivesDiv);
startingLives.appendChild(startingLivesRangeLabel);
startingLives.appendChild(startingLivesInputNo);
settings.appendChild(startingLives);

// add no. of players in settings plan
const amtOfPlayers = document.createElement('div');
amtOfPlayers.classList.add('starting-lives', 'setting');
const amtOfPlayersLabel = document.createElement('label');
amtOfPlayersLabel.classList.add('starting-lives-label');
amtOfPlayersLabel.textContent = '🙋‍♂️ Select no. of players (1 - 4)';
const amtOfPlayersDiv = document.createElement('div');
const amtOfPlayersRangeLabel = document.createElement('label');
amtOfPlayersRangeLabel.classList.add('helper-text');
amtOfPlayersRangeLabel.textContent = 'Input players: ';
amtOfPlayersDiv.classList.add('range');
// input FYI
const noOfPlayersInputNo = document.createElement('input');
noOfPlayersInputNo.defaultValue = 2;
noOfPlayersInputNo.classList.add('start-lives-number');
noOfPlayersInputNo.setAttribute('type', 'number');
noOfPlayersInputNo.setAttribute('min', '1');
noOfPlayersInputNo.setAttribute('max', '5');

amtOfPlayers.appendChild(amtOfPlayersLabel);
amtOfPlayers.appendChild(amtOfPlayersDiv);
amtOfPlayers.appendChild(amtOfPlayersRangeLabel);
amtOfPlayers.appendChild(noOfPlayersInputNo);
settings.appendChild(amtOfPlayers);

// add difficulty dropdown box in settings pane
const difficultyLevel = document.createElement('div');
difficultyLevel.classList.add('difficulty-level', 'setting');
const difficultyLevelLabel = document.createElement('label');
difficultyLevelLabel.classList.add('difficultyLevel-label');
difficultyLevelLabel.textContent = '💪 Select difficulty level';
const difficultyLevelDiv = document.createElement('div');
const difficultyLevelSelectLabel = document.createElement('label');
difficultyLevelSelectLabel.classList.add('helper-text');
difficultyLevelSelectLabel.setAttribute('for', 'difficulty');
difficultyLevelSelectLabel.textContent = 'Difficulty: ';
difficultyLevelDiv.classList.add('range');
const difficultyLevels = ['Easy', 'Medium', 'Hard'];
// input FYI
const difficultySelector = document.createElement('select');
for (let i = 0; i < difficultyLevels.length; i += 1) {
  let option = document.createElement('option');
  option.value = difficultyLevels[i];
  option.text = difficultyLevels[i];
  difficultySelector.appendChild(option);
}

difficultyLevel.appendChild(difficultyLevelLabel);
difficultyLevel.appendChild(difficultyLevelDiv);
difficultyLevel.appendChild(difficultyLevelSelectLabel);
difficultyLevel.appendChild(difficultySelector);
settings.appendChild(difficultyLevel);

// input field to collect entry for answer
const inputField = document.createElement('input');
inputField.classList.add('input-field', 'hidden');
inputField.placeholder = 'Type here';
bottomBar.appendChild(inputField);

// hidden submit button for input field
// const inputFieldSubmitBtn = document.createElement('input');
// inputFieldSubmitBtn.setAttribute('type', 'submit');
// inputFieldSubmitBtn.classList.add('hidden');
// bottomBar.appendChild(inputFieldSubmitBtn);

// div to add into bomb <img>
const bombWord = document.createElement('p');
bombWord.classList.add('bomb-word');

// prevent keydown for inputs (only allow arrows)
minDurationInputNo.addEventListener('keydown', (e) => e.preventDefault());
startingLivesInputNo.addEventListener('keydown', (e) => e.preventDefault());
noOfPlayersInputNo.addEventListener('keydown', (e) => e.preventDefault());

//----------------------------------
//----------------------------------
//----------------------------------

// function runs if user is logged in
const ifLoginTrue = () => {
  // clear login elements
  loginDiv.remove();
  canvas.classList.toggle('hidden');
  // show bottom banner
  bottomBar.classList.remove('hidden');
  // gameId.classList.remove('hidden');
  userId.classList.remove('hidden');
  loginLogoutDiv.textContent = '';
  // show splash screen for game
  const gameIntro = document.createElement('p');
  gameIntro.classList.add('game-intro');
  gameIntro.textContent = 'Welcome to Word Bomb💣';
  canvas.appendChild(gameIntro);
  instructionText.textContent = '';
  instructionText.appendChild(rulesBtn);
  // add logout button
  const logoutBtn = document.createElement('button');
  logoutBtn.classList.add('logout-btn', 'btn');
  logoutBtn.textContent = 'Logout';
  loginLogoutDiv.appendChild(logoutBtn);

  // upon logout click TODO
  logoutBtn.addEventListener('click', () => {
    axios.put(`/logout`);
    location.reload();
  });
};

// upon login click
loginBtn.addEventListener('click', () => {
  axios
    .post('/login', {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
    })
    .then((response) => {
      const userData = response.data.user;
      const username = userData.email.split('@')[0];
      // console.log(userName);
      // console.log(userData);
      ifLoginTrue();
      // gameId.textContent = userData.id;
      userId.textContent = `${username}'s room`;
    })
    .catch((err) => {
      console.log(`Login error: ${err}`);
    });
});

// if user is already logged in
if (document.cookie.split(';').some((item) => item.includes('loggedIn=true'))) {
  ifLoginTrue();
  // ensure that username carries throughout the login session
  axios.get('/user').then((response) => {
    const userData = response.data;
    const userEmail = userData.email;
    const username = userEmail.split('@')[0];
    userId.textContent = `${username}'s room`;
  });
}

// upon edit rules click
rulesBtn.addEventListener('click', () => {
  settings.classList.toggle('hidden');
  canvas.classList.toggle('hidden');
  rulesBtn.classList.toggle('expanded');
  if (rulesBtn.classList.contains('expanded')) {
    rulesBtn.textContent = 'Close rules';
    startGameBtn.classList.add('blur');
    startGameBtn.disabled = true;
  } else {
    startGameBtn.classList.remove('blur');
    rulesBtn.textContent = 'Edit rules';
    startGameBtn.disabled = false;
    // saved settings
    console.log(`Settings:
    duration: ${parseInt(minDurationInputNo.value)}
    lives: ${parseInt(startingLivesInputNo.value)}
    players: ${parseInt(noOfPlayersInputNo.value)}
    difficulty: ${difficultySelector.value}`);
  }
});

/**
 * end button function DOING
 */
startGameBtn.addEventListener('click', () => {
  // change 'edit rules' button to 'show rules'
  rulesBtn.textContent = 'Show rules';
  // disable settings input
  minDurationInputNo.disabled = true;
  startingLivesInputNo.disabled = true;
  noOfPlayersInputNo.disabled = true;
  difficultySelector.disabled = true;

  // end game button
  instructionDiv.appendChild(endGameBtn);

  // send settings to backend
  axios
    .post('/create', {
      duration: parseInt(minDurationInputNo.value),
      lives: parseInt(startingLivesInputNo.value),
      players: parseInt(noOfPlayersInputNo.value),
      difficulty: difficultySelector.value,
    })
    .then((response) => {
      const gameData = response.data;
      console.log(gameData); // LOG
      CURRENT_GAME = gameData.id;
      // remove game intro message
      document.querySelector('.game-intro').remove();
      // add 9 squares
      const containerForGridDiv = document.createElement('div');
      containerForGridDiv.classList.add('container');
      const gridDiv = document.createElement('div');
      gridDiv.classList.add('grid');
      // create 9 squares
      for (let i = 0; i < 9; i += 1) {
        const squares = document.createElement('div');
        squares.classList.add('square', `square${i}`);
        gridDiv.appendChild(squares);
        for (let j = 0; j < 1; j += 1) {
          // add name and lives div into each square
          const nameDiv = document.createElement('div');
          const nameLabel = document.createElement('label');
          nameDiv.classList.add(`nameDiv-${i}`);
          nameLabel.classList.add(`nameLabel-${i}`);
          // nameLabel.textContent = i;
          nameDiv.appendChild(nameLabel);
          const livesDiv = document.createElement('div');
          const livesLabel = document.createElement('label');
          livesDiv.classList.add(`livesDiv-${i}`);
          livesLabel.classList.add(`livesLabel-${i}`);
          livesDiv.appendChild(livesLabel);

          squares.appendChild(nameDiv);
          squares.appendChild(livesDiv);
        }
      }
      containerForGridDiv.appendChild(gridDiv);
      canvas.appendChild(containerForGridDiv);

      // add bomb <img> to middle square
      const imageBomb = document.createElement('img');
      imageBomb.classList.add('bomb-img');
      imageBomb.src = 'bomb.png';
      document.querySelector('.square4').appendChild(imageBomb);
      createPlayers(gameData);

      // 1. remove start btn
      startGameBtn.remove();
      // 2. add input to bottom border
      inputField.classList.remove('hidden');
      // focus on input box
      inputField.focus();
      // start countdown timer & fizzing sound -> TODO
      const timer =
        (gameData.duration + randomNumberGenerator(difficultySelector.value)) *
        1000;
      console.log('🚀 ~ file: script.js ~ line 376 ~ .then ~ timer', timer); // LOG
      let timeout = false;
      // timeout function (can't cleartimeout when it is in another func) BUG
      const myTimeout = setTimeout(() => {
        // run function if timer ended before player gets word correct
        timerEnded();
      }, timer);
      axios
        .post('/word', {
          difficulty: difficultySelector.value,
        })
        .then((response) => {
          console.log(`response: ${response.data}`); // LOG
          const guessLetters = response.data;
          // get word and add into bomb
          // add bomb word into bomb <img>
          bombWord.textContent = response.data;
          document.querySelector('.square4').appendChild(bombWord);
          // send input to server for verification
          inputField.addEventListener('keypress', (x) => {
            if (x.key === 'Enter') {
              // check if input contains the letters taken from server
              const playersGuess = inputField.value;
              // console.log(playersGuess);
              if (playersGuess.includes(guessLetters)) {
                // send a request to server to check if word exists
                axios
                  .post('/wordverification', {
                    input: inputField.value,
                  })
                  .then((response) => {
                    const result = response.data;
                    if (result === 'Correct') {
                      // TODO
                      // 1. stop timer
                      clearInterval(myTimeout);
                      // 2. next player turn
                      nextPlayer(gameDate.players);
                      // 3. show start button
                      console.log('timeout cleared'); // LOG
                      // 1. pass turn to next player
                      // 2. start btn appears again
                    }
                  });
                inputField.value = '';
              }
            }
          });
        });
    });
});

/**
 * end button function
 */
endGameBtn.addEventListener('click', () => {
  axios.put(`/reset-game/${CURRENT_GAME}`);
});
