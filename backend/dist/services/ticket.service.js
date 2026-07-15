"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTickets = createTickets;
exports.validateTicket = validateTicket;
exports.getTicketByCode = getTicketByCode;
exports.getTicketsByReservationCode = getTicketsByReservationCode;
const crypto_1 = __importDefault(require("crypto"));
const qrcode_1 = __importDefault(require("qrcode"));
const prisma_1 = require("../config/prisma");
async function createTickets(reservationId) {
    console.log("Iniciando criação dos ingressos");
    const reservation = await prisma_1.prisma.reservation.findUnique({
        where: {
            id: reservationId,
        },
    });
    if (!reservation) {
        throw new Error("Reserva não encontrada");
    }
    console.log("Quantidade:", reservation.quantity);
    const tickets = [];
    for (let i = 0; i < reservation.quantity; i++) {
        const code = crypto_1.default.randomUUID();
        console.log("Criando ingresso:", code);
        const qrCode = await qrcode_1.default.toDataURL(code);
        const ticket = await prisma_1.prisma.ticket.create({
            data: {
                code,
                qrCode,
                reservationId: reservation.id,
            },
        });
        tickets.push(ticket);
    }
    console.log("Ingressos criados:", tickets.length);
    return tickets;
}
async function validateTicket(code) {
    const ticket = await prisma_1.prisma.ticket.findUnique({
        where: {
            code,
        },
        include: {
            reservation: true,
        },
    });
    if (!ticket) {
        throw new Error("Ingresso não encontrado.");
    }
    if (ticket.used) {
        throw new Error("Ingresso já utilizado.");
    }
    const updatedTicket = await prisma_1.prisma.ticket.update({
        where: {
            id: ticket.id,
        },
        data: {
            used: true,
        },
        include: {
            reservation: true,
        },
    });
    return updatedTicket;
}
async function getTicketByCode(code) {
    const ticket = await prisma_1.prisma.ticket.findUnique({
        where: {
            code,
        },
        include: {
            reservation: true,
        },
    });
    if (!ticket) {
        throw new Error("Ingresso não encontrado.");
    }
    return ticket;
}
async function getTicketsByReservationCode(code) {
    const reservation = await prisma_1.prisma.reservation.findUnique({
        where: {
            code,
        },
        include: {
            tickets: true,
        },
    });
    if (!reservation) {
        throw new Error("Reserva não encontrada.");
    }
    return reservation.tickets;
}
