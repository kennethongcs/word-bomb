/**
 * TODO
 * 1. Create interfaces in CSS.
 * 2. Before starting game, certain settings have to be confirmed.
 *  - Create button to select "difficulty".
 *  - Include timers and number of lives.
 * -----
 * ADDITIONAL
 * 1. Sound of string burning down.
 * 2. Explosion sound.
 */

// change game-display to login window
// add instructions to login
// remove game_id and username
// change login / logout button to 'login'
// hide bottom bar

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
  logoutBtn.addEventListener('click', () => {
    axios.put('/logout');
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
      const userName = userData.email.split('@')[0];
      // console.log(userName);
      // console.log(userData);
      ifLoginTrue();
      // gameId.textContent = userData.id;
      userId.textContent = `${userName}'s room`;
    })
    .catch((err) => {
      console.log(`Login error: ${err}`);
    });
});

// if user is already logged in
if (document.cookie.split(';').some((item) => item.includes('loggedIn=true'))) {
  ifLoginTrue();
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
    // send settings to backend
    axios.post('/create', {
      duration: minDurationInputNo.value,
      lives: startingLivesInputNo.value,
    });
  }
});

// start button function
startGameBtn.addEventListener('click', () => {
  console.log('clicked');
});
