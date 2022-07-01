import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';
import initGamesController from './controllers/games.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);
  const gamesController = initGamesController(db);

  app.get('/', usersController.root);
  app.get('/user', usersController.user);
  app.post('/login', usersController.login);
  app.put('/logout', usersController.logout);

  app.post('/word', gamesController.getWord);
  app.post('/wordverification', gamesController.checkWord);
  app.put('/reset-game/:id', gamesController.resetGame);
  app.put('/next-player', gamesController.nextPlayer);
  app.post('/create', gamesController.create);
  app.put('/lose-life', gamesController.loseLife);
}
