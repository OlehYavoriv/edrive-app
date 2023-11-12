const { TicketProgress, UserAnswers } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProgressController {
    async add(req, res, next) {
        try {
            const {correct, progress, ticketTicketId, userUid, answers,} = req.body;

            const ticketProgress = await TicketProgress.create({correct, userUid, progress, ticketTicketId,});

            const userAnswers = [];
            for (const answer of JSON.parse(answers)) {
                const userAnswer = await UserAnswers.create({
                    is_correct: answer.is_correct,
                    testTicketId: answer.testTicketId,
                    testAnswerAnswerId: answer.answer_id,
                    ticketProgressProgressId: ticketProgress.progress_id,
                });

                userAnswers.push(userAnswer);
            }

            return res.json({ticketProgress, userAnswers,});
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getUserProgress(req, res, next) {
        try {
            const userId = req.params.uid;

            const userProgress = await TicketProgress.findAll({
                where: {userUid: userId},
                attributes: ['userUid', 'progress', 'correct', 'ticketTicketId']
            });

            return res.json({userProgress});
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new ProgressController();
