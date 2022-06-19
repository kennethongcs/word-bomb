import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initGameModel from './game-model.mjs';
import initUserModel from './user-model.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  config
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Game = initGameModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Game, { through: 'user_games' });
db.Game.belongsToMany(db.User, { through: 'user_games' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
