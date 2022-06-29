import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';
import initGamesController from './controllers/games.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);
  const gamesController = initGamesController(db);

  // app.use(usersController.loginCheck);
  // app.use(usersController.userState);

  app.get('/', usersController.root);
  app.get('/user', usersController.user);
  app.post('/word', gamesController.getWord);
  app.post('/wordverification', gamesController.checkWord);
  app.post('/login', usersController.login);
  app.put('/logout', usersController.logout);
  app.put('/reset-game/:id');
  app.post('/create', gamesController.create);
}
