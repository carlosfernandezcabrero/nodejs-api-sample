const sinon = require('sinon')
const query = require('../../src/resources/db_methods')
const service = require('../../src/services/soldier.service')
const { assert } = require('chai')

describe('Soldier services', () => {
    let stub

    afterEach(() => {
        stub.restore()
    })

    it('Get all soldiers', async () => {
        const soldier = {}
        stub = sinon.stub(query, 'queryNoParams').returns(soldier)
        const result = await service.findAllSoldiers()
        assert.strictEqual(result, soldier)
    })

    it('Get soldiers by id', async () => {
        const soldier = {}
        stub = sinon.stub(query, 'queryWithParams').returns(soldier)
        const result = await service.findSoldierById(3)
        assert.strictEqual(result, soldier)
    })
})
