const uuid = require('uuid')
const path = require('path')
const { Test } = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {
    async create(req, res, next) {
        try {
            const {question, topicTopicId} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const test = await Test.create({question, topicTopicId, image: fileName})

            return res.json(test)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const question = await Test.findAll()

        return res.json(question)
    }
}

module.exports = new QuestionController()
