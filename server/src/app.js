const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

// Use Morgan as log generator
app.use(morgan('combine'))

// Allow our Express app to easily parse any JSON requests sent
app.use(bodyParser.json())

// Enable CORS
app.use(cors())

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

// Start listening
sequelize.sync()
    .then() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    }
