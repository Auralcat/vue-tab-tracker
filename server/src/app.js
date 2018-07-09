const express = require('express')
const bodyParser = require('bodyParser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Use Morgan as log generator
app.use(morgan('combine'))

// Allow our Express app to easily parse any JSON requests sent
app.use(bodyParser.json())

// Enable CORS
app.use(cors())

// Start listening
app.listen(process.env.PORT | 8081)
