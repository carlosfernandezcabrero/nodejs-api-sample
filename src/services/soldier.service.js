const connection = require('../loaders/mysql')
const dbMethods = require('../resources/db_methods')
const queries = require('../resources/db_queries')

const SoldierService = {
    async findAllSoldiers () {
        return await dbMethods.queryNoParams(queries.findAllSoldiers, connection)
    },

    async findSoldierById (id) {
        return await dbMethods.queryWithParams(queries.findSoldierById, id, connection)
    }
}

module.exports = SoldierService
