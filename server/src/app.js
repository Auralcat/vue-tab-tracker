const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('../src/config/config')

const app = express()

// Use Morgan as log generator
app.use(morgan('common'))

// Allow our Express app to easily parse any JSON requests sent
app.use(bodyParser.json())

// Enable CORS
app.use(cors())

// Plug the routes
require('./routes')(app)

// Test the connection
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully! Yay!')
    })
    .catch(function(err) {
        console.log('Unable to connect to database:', err)
    })

// Start listening
sequelize.sync({logging: console.log})
    .then(() => {
        app.listen(config.port)
        morgan(`Server started on port ${config.port}`)
    })
