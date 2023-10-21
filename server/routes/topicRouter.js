const Router = require('express')
const router = new Router()
const topicController = require('../controllers/topicController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), topicController.create)
router.get('/', topicController.getAll)

module.exports = router
