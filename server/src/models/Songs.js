module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('User', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyrics: DataTypes.TEXT,
        tab: DataTypes.TEXT,
    })

    return Song
}
