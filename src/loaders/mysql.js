const mysql = require('mysql')
const errorHandler = require('./../handlers/error_handler')
const config = require('./../config/index')

const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
})

connection.connect((err) => {
    if (err) {
        errorHandler(err)
    }
})

module.exports = connection
