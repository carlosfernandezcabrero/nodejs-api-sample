const { createLogger, transports, format } = require('winston')
const { timestamp, prettyPrint } = format

const loggers = {
    logger: createLogger({
        format: format.combine(
            timestamp({
                format: 'DD-MM-YYYY HH:mm:ss'
            }),
            prettyPrint()),
        transports: [
            new transports.File({ filename: 'application.log' })
        ]
    })
}

module.exports = loggers
