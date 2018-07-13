const {Song} = require('../models');

module.exports = {
    async index (req, res) {
        try {
            const song = Song.findAll({
                limit: 10
            })
        } catch (err) {
            res.status(500).send({
                error: "An error has occurred trying to fetch the songs"
            })
        }
    },
    async post (req, res) {
        try {
            const song = Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: "An error has occurred while trying to create the song"
            })
        }
    }
}
