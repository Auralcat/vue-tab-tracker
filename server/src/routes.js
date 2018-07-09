const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    // Lay the routes
    app.get('/status', (req, res) => {
        res.send({
            message: "Hello Express!"
        })
    })
    app.post('/register',
             AuthenticationControllerPolicy.register,
             AuthenticationController.register)

}
