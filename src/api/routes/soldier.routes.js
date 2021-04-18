const router = require('express').Router()
const errorHandler = require('../../handlers/error_handler')
const soldierService = require('./../../services/soldier.service')

const pathBase = '/soldiers'

router.get(pathBase, (req, res) => {
    soldierService.findAllSoldiers()
        .then((result) => res.json(result))
        .catch((err) => errorHandler(err, res))
})

router.get(pathBase + '/:id', (req, res) => {
    soldierService.findSoldierById(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => errorHandler(err, res))
})

module.exports = router
