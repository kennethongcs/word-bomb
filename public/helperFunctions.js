const playerLives = (lives) => {
  if (lives === 1) {
    return '🧡';
  }
  if (lives === 2) {
    return '🧡🧡';
  }
  if (lives === 3) {
    return '🧡🧡🧡';
  }
  if (lives === 4) {
    return '🧡🧡🧡🧡';
  }
  if (lives === 5) {
    return '🧡🧡🧡🧡🧡';
  }
};

const createPlayers = (gameData) => {
  const players = gameData.players;
  const lives = gameData.lives;
  if (players === 1) {
    // add player 1 name and health to bottom square
    document.querySelector('.square7').classList.add('player1-div')
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    document.querySelector('.livesDiv-7').classList.add('player1') = playerLives(
      lives.player1
    );
  } else if (players === 2) {
    // add player 1 name and health to bottom square
    document.querySelector('.square7').classList.add('player1-div')
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    document.querySelector('.livesDiv-7').classList.add('player1-lives')
    // add player 2 name and health to top square
    document.querySelector('.square1').classList.add('player2-div')
    document.querySelector('.nameLabel-1').textContent = 'Player 2';
    document.querySelector('.livesDiv-1').textContent = playerLives(
      lives.player2
    );
    document.querySelector('.livesDiv-1').classList.add('player2-lives')
  } else if (players === 3) {
    // add player 1 name and health to bottom square
    document.querySelector('.square7').classList.add('player1-div')
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    document.querySelector('.livesDiv-7').classList.add('player1-lives')
    // add player 2 name and health to square 0
    document.querySelector('.square0').classList.add('player2-div')
    document.querySelector('.nameLabel-0').textContent = 'Player 2';
    document.querySelector('.livesDiv-0').textContent = playerLives(
      lives.player2
    );
    document.querySelector('.livesDiv-0').classList.add('player2-lives')
    // add player 3 name and health to square 2
    document.querySelector('.square2').classList.add('player3-div')
    document.querySelector('.nameLabel-2').textContent = 'Player 3';
    document.querySelector('.livesDiv-2').textContent = playerLives(
      lives.player3
    );
    document.querySelector('.livesDiv-2').classList.add('player3-lives')
  } else if (players === 4) {
    // add player 1 name and health to bottom square
    document.querySelector('.square7').classList.add('player1-div')
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    document.querySelector('.livesDiv-7').classList.add('player1-lives')
    // add player 2 name and health to square 1
    document.querySelector('.square1').classList.add('player2-div')
    document.querySelector('.nameLabel-1').textContent = 'Player 2';
    document.querySelector('.livesDiv-1').textContent = playerLives(
      lives.player2
    );
    document.querySelector('.livesDiv-1').classList.add('player2-lives')
    // add player 3 name and health to square 3
    document.querySelector('.square3').classList.add('player3-div')
    document.querySelector('.nameLabel-3').textContent = 'Player 3';
    document.querySelector('.livesDiv-3').textContent = playerLives(
      lives.player3
    );
    document.querySelector('.livesDiv-3').classList.add('player3-lives')
    // add player 4 name and health to square 2
    document.querySelector('.square5').classList.add('player4-div')
    document.querySelector('.nameLabel-5').textContent = 'Player 4';
    document.querySelector('.livesDiv-5').textContent = playerLives(
      lives.player4
    );
    document.querySelector('.livesDiv-5').classList.add('player4-lives')
  }
};

const randomNumberGenerator = (difficultyLevel) => {
  // easy + 3-6secs
  // medium + 2-5secs
  // hard + 1-3secs
  if (difficultyLevel === 'Easy') {
    return Math.floor(Math.random() * (5 - 2) + 2);
  } else if (difficultyLevel === 'Medium') {
    return Math.floor(Math.random() * (4 - 1) + 1);
  } else if (difficultyLevel === 'Hard') {
    return Math.floor(Math.random() * (2 - 0) + 0);
  }
};

const timerEnded = () => {
  console.log('timeout! 💣');
  doomTakeDamage()
  // 1. lose 1 life, next player turn
  axios.put('/lose-life', {
    CURRENT_GAME
  }).then((response) => {
    CURRENT_GAME = response.data
    // go to next players turn
    nextPlayer()
  }) // DONE
  // start next players turn
  // 2. show start button
};

// BUG current player not showing new player
const nextPlayer = () => {
  console.log('next players turn');
  axios.put(`/next-player`, {
    CURRENT_GAME
  }).then((response) => {
   
    // update global var for current game
    CURRENT_GAME = response.data
  })
  // show start button to repeat process again
};

const doomTakeDamage = () => {
  damage.classList.add("do-damage");
  setTimeout(function () {
    damage.classList.remove("do-damage");
  }, 400);
}