"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMercadoPagoPreference = createMercadoPagoPreference;
const mercadopago_1 = require("mercadopago");
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});
async function createMercadoPagoPreference(data) {
    const preference = new mercadopago_1.Preference(client);
    const response = await preference.create({
        body: {
            items: [
                {
                    id: data.code,
                    title: "Ingresso Super Estilingue",
                    description: "Entrada para o Super Estilingue",
                    quantity: data.quantity,
                    unit_price: Number((data.total / data.quantity).toFixed(2)),
                    currency_id: "BRL",
                },
            ],
            payer: {
                name: data.buyerName,
                email: data.buyerEmail,
            },
            // código da reserva
            external_reference: data.code,
            // retorno após pagamento
            back_urls: {
                success: `http://localhost:5173/success?external_reference=${data.code}`,
                failure: "http://localhost:5173/failure",
                pending: "http://localhost:5173/pending",
            },
            // webhook Mercado Pago
            notification_url: "https://abroad-sprang-trouble.ngrok-free.dev/api/payments/webhook"
        },
    });
    console.log("Preferência criada:", response.id);
    return response;
}
