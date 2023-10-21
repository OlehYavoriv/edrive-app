const { Topics } = require("../models/models");
const ApiError = require('../error/ApiError')

class TopicController {
    async create(req, res, next) {
        try {
            const {title} = req.body
            const topic = await Topics.create({title})

            return res.json(topic)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const topics = await Topics.findAll()

        return res.json(topics)
    }
}

module.exports = new TopicController()
