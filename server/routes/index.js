const Router = require('express')
const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')
const ticketRouter = require('./ticketRouter')
const topicRouter = require('./topicRouter')
const progressRouter = require('./progressRouter')

const router = new Router()

router.use('/user', userRouter)
router.use('/question', questionRouter)
router.use('/ticket', ticketRouter)
router.use('/topic', topicRouter)
router.use('/progress', progressRouter)

module.exports = router
