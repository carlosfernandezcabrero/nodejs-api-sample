const { stub } = require('sinon')
const query = require('../../src/resources/db_methods')
const service = require('../../src/services/soldier.service')

describe('Soldier services', () => {
    it('Get all soldiers', async () => {
        const expected = {}
        stub(query, 'queryNoParams').returns(expected)
        const result = await service.findAllSoldiers()
        expect(expected).toBe(result)
    })

    it('Get soldiers by id', async () => {
        const expected = {}
        stub(query, 'queryWithParams').returns(expected)
        const result = await service.findSoldierById(3)
        expect(expected).toBe(result)
    })
})
