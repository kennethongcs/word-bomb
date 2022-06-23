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
loginBtn.classList.add('login-btn');
loginBtn.setAttribute('type', 'submit');
loginBtn.textContent = 'Log In';
loginBtnDiv.appendChild(loginBtn);

// start game button
const startGameBtn = document.createElement('button');
bottomBar.classList.add('hidden');
startGameBtn.classList.add('start-btn');
startGameBtn.setAttribute('type', 'btn');
startGameBtn.textContent = 'Start Game';
bottomBar.appendChild(startGameBtn);

// top banner
const gameId = document.querySelector('.game_id');
const userId = document.querySelector('.user');
const loginLogoutDiv = document.querySelector('.login');

// instructions
const instructionDiv = document.querySelector('.instructions');
const instructionText = document.createElement('p');
instructionText.textContent = 'Please Login to Continue';
instructionDiv.appendChild(instructionText);

// upon login click
loginBtn.addEventListener('click', () => {
  axios
    .post('/login', {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
    })
    .then((response) => {
      console.log(response.data);
      // clear login elements
    });
});
