const router = require('express').Router()
const log = require('../../loaders/logger')
const soldierService = require('./../../services/soldier.service')

const pathBase = '/soldiers'

router.get(pathBase, (req, res) => {
    soldierService.findAllSoldiers()
        .then((result) => res.json(result))
        .catch((err) => {
            log.logger.error(err)
            res.json(err)
        })
})

router.get(pathBase + '/:id', (req, res) => {
    soldierService.findSoldierById(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => {
            log.logger.error(err)
            res.json(err)
        })
})

module.exports = router
