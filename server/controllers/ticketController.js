const { Tickets, TestTicket } = require("../models/models");
const ApiError = require("../error/ApiError");

class TicketController {
    async create(req, res, next) {
        try {
            const {testIds} = req.body;
            const testIdArray = JSON.parse(testIds);
            const ticket = await Tickets.create();

            for (const testId of testIdArray) {
                await TestTicket.create({ticketTicketId: ticket.ticket_id, testTestId: testId});
            }

            return res.json(ticket)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const tickets = await TestTicket.findAll();

            return res.json(tickets);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const ticket = await Tickets.findByPk(id);
            if (!ticket) return next(ApiError.badRequest("Ticket not found"));
            await ticket.destroy();

            return res.json({message: "Ticket deleted successfully"});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TicketController()
