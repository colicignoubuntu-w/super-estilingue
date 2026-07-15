"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = createReservation;
const prisma_1 = require("../config/prisma");
const mercadoPago_service_1 = require("./mercadoPago.service");
async function createReservation(data) {
    const settings = await prisma_1.prisma.settings.findFirst();
    if (!settings) {
        throw new Error("Configurações não encontradas");
    }
    const operatingDay = await prisma_1.prisma.operatingDay.findUnique({
        where: {
            id: data.operatingDayId
        },
        include: {
            reservations: true
        }
    });
    if (!operatingDay) {
        throw new Error("Dia não encontrado");
    }
    if (!operatingDay.isOpen) {
        throw new Error("Este dia está fechado");
    }
    const totalReservado = operatingDay.reservations.reduce((total, reservation) => total + reservation.quantity, 0);
    if (totalReservado + data.quantity > operatingDay.capacity) {
        throw new Error("Não existem vagas suficientes");
    }
    const total = Number(settings.ticketPrice) * data.quantity;
    const code = `SE-${Date.now()}`;
    const reservation = await prisma_1.prisma.reservation.create({
        data: {
            code,
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            buyerPhone: data.buyerPhone,
            quantity: data.quantity,
            acceptedTerms: data.acceptedTerms,
            total,
            operatingDayId: data.operatingDayId,
            payment: {
                create: {
                    status: "PENDING"
                }
            }
        },
        include: {
            payment: true
        }
    });
    const preference = await (0, mercadoPago_service_1.createMercadoPagoPreference)({
        code: reservation.code,
        quantity: reservation.quantity,
        total: Number(reservation.total),
        buyerName: reservation.buyerName,
        buyerEmail: reservation.buyerEmail
    });
    await prisma_1.prisma.payment.update({
        where: {
            reservationId: reservation.id
        },
        data: {
            mercadoPagoPreferenceId: preference.id
        }
    });
    const updatedReservation = await prisma_1.prisma.reservation.findUnique({
        where: {
            id: reservation.id
        },
        include: {
            payment: true
        }
    });
    return {
        reservation: updatedReservation,
        paymentUrl: preference.init_point
    };
}
