const {Topics} = require("../models/models");
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

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const topic = await Topics.findByPk(id);
            if (!topic) return next(ApiError.badRequest("Topic not found"));

            await topic.destroy();

            return res.json({message: "Topic deleted successfully"});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TopicController()
