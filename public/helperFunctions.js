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
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
  } else if (players === 2) {
    // add player 1 name and health to bottom square
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    // add player 2 name and health to top square
    document.querySelector('.nameLabel-1').textContent = 'Player 2';
    document.querySelector('.livesDiv-1').textContent = playerLives(
      lives.player2
    );
  } else if (players === 3) {
    // add player 1 name and health to bottom square
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    // add player 2 name and health to square 0
    document.querySelector('.nameLabel-0').textContent = 'Player 2';
    document.querySelector('.livesDiv-0').textContent = playerLives(
      lives.player2
    );
    // add player 3 name and health to square 2
    document.querySelector('.nameLabel-2').textContent = 'Player 2';
    document.querySelector('.livesDiv-2').textContent = playerLives(
      lives.player3
    );
  } else if (players === 4) {
    // add player 1 name and health to bottom square
    document.querySelector('.nameLabel-7').textContent = 'Player 1';
    document.querySelector('.livesDiv-7').textContent = playerLives(
      lives.player1
    );
    // add player 2 name and health to square 1
    document.querySelector('.nameLabel-1').textContent = 'Player 2';
    document.querySelector('.livesDiv-1').textContent = playerLives(
      lives.player2
    );
    // add player 3 name and health to square 3
    document.querySelector('.nameLabel-3').textContent = 'Player 2';
    document.querySelector('.livesDiv-3').textContent = playerLives(
      lives.player3
    );
    // add player 4 name and health to square 2
    document.querySelector('.nameLabel-5').textContent = 'Player 2';
    document.querySelector('.livesDiv-5').textContent = playerLives(
      lives.player4
    );
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

// const countdownTimer = (time) => {
//   setTimeout(() => {
//     timeout = true;
//     console.log(
//       '🚀 ~ file: helperFunctions.js ~ line 95 ~ setTimeout ~ timeout',
//       timeout
//     );
//   }, time);
// };

const timerEnded = () => {
  console.log('timeout!');
  // 1. lose 1 life, next player turn
  // 2. show start button
};
