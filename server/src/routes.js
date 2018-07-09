module.exports = (app) => {
    // Lay the routes
    app.get('/status', (req, res) => {
        res.send({
            message: "Hello Express!"
        })
    })

    app.post('/register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}, your user was registered, have fun!`
        })
    })

}
