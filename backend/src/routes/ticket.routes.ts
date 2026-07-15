import { Router } from "express";
import {
  validateTicketController,
  getTicketController,
  getTicketsByReservationController
} from "../controllers/ticket.controller";


const router = Router();


router.post(
  "/validate",
  validateTicketController
);


router.get(
  "/:code",
  getTicketController
);


router.get(
  "/reservation/:code",
  getTicketsByReservationController
);


export default router;