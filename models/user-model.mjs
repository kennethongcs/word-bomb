export default function initUserModel(sequelize, DateTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DateTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DateTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DateTypes.TEXT,
      },
      created_at: {
        allowNull: false,
        type: DateTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DateTypes.DATE,
      },
    },
    { underscored: true }
  );
}
