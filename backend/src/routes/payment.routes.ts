import { Router } from "express";
import { mercadoPagoWebhook } from "../controllers/payment.controller";

const router = Router();

router.post("/webhook", mercadoPagoWebhook);

export default router;