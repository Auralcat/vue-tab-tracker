const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    // Lay the routes
    app.get('/status', (req, res) => {
        res.send({
            message: "Hello Express!"
        })
    })

    // Songs endpoint
    app.get('/songs', SongsController.index)

    app.post('/register',
             // This is a middleware!
             AuthenticationControllerPolicy.register,
             AuthenticationController.register)

    app.post('/login', AuthenticationController.register)

    // Get songs
    app.get('/songs',
             SongsController.index)
    // Post songs
    app.post('/songs',
             SongsController.post)

}
