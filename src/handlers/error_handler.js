const loggers = require('./../loaders/logger')

const errorHandler = (err, res = undefined, isOperational = true, statusCode = 500, message = 'Internal server error') => {
    if (isOperational) {
        loggers.logger.error(err)
    }

    if (res !== undefined) {
        res.statusCode = statusCode
        res.json({
            Message: message,
            'Error code': statusCode
        })
    }
}

module.exports = errorHandler
