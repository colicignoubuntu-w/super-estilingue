import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { prisma } from "./config/prisma";

import reservationRoutes from "./routes/reservation.routes";
import paymentRoutes from "./routes/payment.routes";
import ticketRoutes from "./routes/ticket.routes";

dotenv.config();

console.log(
  "TOKEN MP:",
  process.env.MERCADO_PAGO_ACCESS_TOKEN?.substring(0, 20)
);

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/tickets", ticketRoutes);

app.get("/", (_req, res) => {
  res.json({
    status: "online",
    message: "🚀 API Super Estilingue funcionando!",
  });
});

app.get("/test-db", async (_req, res) => {
  try {
    const settings = await prisma.settings.findMany();

    res.json({
      database: "connected",
      settings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao conectar no banco",
    });
  }
});

// 👇 ADICIONE ESTE ENDPOINT
app.get("/tickets", async (_req, res) => {
  try {
    const tickets = await prisma.ticket.findMany();

    res.json(tickets);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao buscar ingressos",
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}`
  );
});