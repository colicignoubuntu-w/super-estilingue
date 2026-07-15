"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservationController = createReservationController;
const reservation_service_1 = require("../services/reservation.service");
async function createReservationController(req, res) {
    try {
        const reservation = await (0, reservation_service_1.createReservation)(req.body);
        return res.status(201).json({
            success: true,
            reservation
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
