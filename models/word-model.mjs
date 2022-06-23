export default function initWordModel(sequelize, DataTypes) {
  return sequelize.define(
    'word',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      word: {
        type: DataTypes.TEXT,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
}
