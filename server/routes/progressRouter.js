const Router = require('express')
const router = new Router()
const progressController = require('../controllers/progressController')

router.post('/', progressController.add)

module.exports = router
