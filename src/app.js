const express = require('express')
const config = require('./config/index')
const cors = require('cors')
const logger = require('./loaders/logger')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use(require('./api/routes/soldier.routes'))

app.listen(config.SERVER_PORT, () => {
    logger.logger.info('The server is started on port ' + config.SERVER_PORT)
})
