const Router = require('express')
const router = new Router()
const progressController = require('../controllers/progressController')

router.post('/', progressController.add)
router.get('/:uid', progressController.getUserProgress)

module.exports = router
