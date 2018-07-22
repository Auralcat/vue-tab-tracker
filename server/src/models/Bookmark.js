module.exports = (sequelize, DataTypes) => {
  // No params for this model
  const Bookmark = sequelize.define('Bookmark', {})

  // Association function
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }

  return Bookmark
}
