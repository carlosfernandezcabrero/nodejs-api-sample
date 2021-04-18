const queryNoParams = (query, connection) => {
    const promise = new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if (err) {
                return reject(err)
            }
            return resolve(rows)
        })
    })
    return promise
}

const queryWithParams = (query, params, connection) => {
    const promise = new Promise((resolve, reject) => {
        connection.query(query, params, (err, rows) => {
            if (err) {
                return reject(err)
            }
            return resolve(rows)
        })
    })
    return promise
}

module.exports = {
    queryNoParams,
    queryWithParams
}
