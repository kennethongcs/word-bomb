import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';
import initGamesController from './controllers/games.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);
  const gamesController = initGamesController(db);

  // app.use(usersController.loginCheck);
  // app.use(usersController.userState);

  app.get('/', usersController.root);
  app.post('/login', usersController.login);
  app.put('/logout', gamesController.logout);
  app.post('/create', gamesController.create);
}
