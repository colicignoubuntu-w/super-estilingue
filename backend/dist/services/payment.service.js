"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMercadoPagoPayment = processMercadoPagoPayment;
const mercadopago_1 = require("mercadopago");
const prisma_1 = require("../config/prisma");
const ticket_service_1 = require("./ticket.service");
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});
async function processMercadoPagoPayment(paymentId) {
    const payment = new mercadopago_1.Payment(client);
    const response = await payment.get({
        id: paymentId,
    });
    console.log("Pagamento Mercado Pago:");
    console.log(response.status);
    if (response.status !== "approved") {
        return;
    }
    const reservationCode = response.external_reference;
    if (!reservationCode) {
        throw new Error("Reserva não encontrada");
    }
    const reservation = await prisma_1.prisma.reservation.findUnique({
        where: {
            code: reservationCode,
        },
    });
    if (!reservation) {
        throw new Error("Reserva não encontrada no banco");
    }
    await prisma_1.prisma.payment.update({
        where: {
            reservationId: reservation.id,
        },
        data: {
            status: "APPROVED",
            mercadoPagoPaymentId: String(response.id),
            method: response.payment_method_id,
        },
    });
    await prisma_1.prisma.reservation.update({
        where: {
            id: reservation.id,
        },
        data: {
            status: "PAID",
        },
    });
    // Cria os ingressos com QR Code
    await (0, ticket_service_1.createTickets)(reservation.id);
    console.log("Pagamento aprovado para reserva:", reservation.code);
}
