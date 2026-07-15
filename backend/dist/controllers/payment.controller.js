"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercadoPagoWebhook = mercadoPagoWebhook;
const payment_service_1 = require("../services/payment.service");
async function mercadoPagoWebhook(req, res) {
    console.log("Webhook Mercado Pago recebido:");
    console.log(req.body);
    try {
        if (req.body.type === "payment") {
            const paymentId = req.body.data.id;
            await (0, payment_service_1.processMercadoPagoPayment)(paymentId);
        }
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
