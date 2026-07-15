"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTicketController = validateTicketController;
exports.getTicketController = getTicketController;
exports.getTicketsByReservationController = getTicketsByReservationController;
const ticket_service_1 = require("../services/ticket.service");
async function validateTicketController(req, res) {
    try {
        const { code } = req.body;
        const ticket = await (0, ticket_service_1.validateTicket)(code);
        return res.status(200).json({
            success: true,
            message: "Ingresso válido.",
            ticket,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}
async function getTicketController(req, res) {
    try {
        const code = String(req.params.code);
        const ticket = await (0, ticket_service_1.getTicketByCode)(code);
        return res.status(200).json({
            success: true,
            ticket,
        });
    }
    catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message,
        });
    }
}
async function getTicketsByReservationController(req, res) {
    try {
        const code = String(req.params.code);
        const tickets = await (0, ticket_service_1.getTicketsByReservationCode)(code);
        return res.status(200).json({
            success: true,
            tickets,
        });
    }
    catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message,
        });
    }
}
