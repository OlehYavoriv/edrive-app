const uuid = require('uuid')
const path = require('path')
const { Test, TestAnswers } = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {
    async create(req, res, next) {
        try {
            const {question, topicTopicId} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const answers = JSON.parse(req.body.answers);

            const test = await Test.create({question, topicTopicId, image: fileName})

            for (const answerData of answers) {
                await TestAnswers.create({
                    answer_text: answerData.answer_text,
                    is_correct: answerData.is_correct,
                    testTestId: test.test_id,
                });
            }
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
