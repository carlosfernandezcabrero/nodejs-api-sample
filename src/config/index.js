require('dotenv').config()

const config = {
    // Database
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,

    // Express
    SERVER_PORT: process.env.PORT
}

module.exports = config
