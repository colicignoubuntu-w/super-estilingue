"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = require("./config/prisma");
const reservation_routes_1 = __importDefault(require("./routes/reservation.routes"));
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
const ticket_routes_1 = __importDefault(require("./routes/ticket.routes"));
dotenv_1.default.config();
console.log("TOKEN MP:", process.env.MERCADO_PAGO_ACCESS_TOKEN?.substring(0, 20));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rotas
app.use("/api/reservations", reservation_routes_1.default);
app.use("/api/payments", payment_routes_1.default);
app.use("/api/tickets", ticket_routes_1.default);
app.get("/", (_req, res) => {
    res.json({
        status: "online",
        message: "🚀 API Super Estilingue funcionando!",
    });
});
app.get("/test-db", async (_req, res) => {
    try {
        const settings = await prisma_1.prisma.settings.findMany();
        res.json({
            database: "connected",
            settings,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Erro ao conectar no banco",
        });
    }
});
// 👇 ADICIONE ESTE ENDPOINT
app.get("/tickets", async (_req, res) => {
    try {
        const tickets = await prisma_1.prisma.ticket.findMany();
        res.json(tickets);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Erro ao buscar ingressos",
        });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
