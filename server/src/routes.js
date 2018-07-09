const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    // Lay the routes
    app.get('/status', (req, res) => {
        res.send({
            message: "Hello Express!"
        })
    })
    app.post('/register',
            AuthenticationController.register)

}
