export default function initGameModel(sequelize, DataTypes) {
  return sequelize.define('game', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    game_state: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}
