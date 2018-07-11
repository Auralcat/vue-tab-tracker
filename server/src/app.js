const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('../config/config')

const app = express()

// Use Morgan as log generator
app.use(morgan('common'))

// Allow our Express app to easily parse any JSON requests sent
app.use(bodyParser.json())

// Enable CORS
app.use(cors())

// Plug the routes
require('./routes')(app)

// Start listening
sequelize.sync({force: true})
    .then(() => {
        app.listen(config.port)
        morgan(`Server started on port ${config.port}`)
    })
