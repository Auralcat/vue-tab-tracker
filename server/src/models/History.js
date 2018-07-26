module.exports = (sequelize, DataTypes) => {
  // No params for this model
  const History = sequelize.define('History', {})

  // Association function
  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}
