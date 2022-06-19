import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';
import initGamesController from './controllers/games.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);
  const gamesController = initGamesController(db);

  // load main page
  app.get('/', usersController.root);
}
