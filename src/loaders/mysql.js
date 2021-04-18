const mysql = require('mysql')
const config = require('./../config/index')
const log = require('../loaders/logger')

const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
})

connection.connect((err) => {
    if (err) {
        log.logger.error(err)
    }
})

module.exports = connection
