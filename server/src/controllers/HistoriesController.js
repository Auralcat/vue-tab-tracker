const {
  History,
  Song,
  User
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the histories'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId} = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })

      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}