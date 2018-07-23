const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
           AuthenticationControllerPolicy.register,
           AuthenticationController.register)
  app.post('/login',
           AuthenticationController.login)

  app.get('/songs',
          SongsController.index)
  app.post('/songs',
           SongsController.post)
  app.put('/songs/:songId',
         SongsController.put)

  app.get('/songs/:songId',
          SongsController.show)

  app.get('/bookmarks',
          BookmarksController.index)
}
