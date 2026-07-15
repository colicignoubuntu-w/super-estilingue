import { Router } from "express";
import { createReservationController } from "../controllers/reservation.controller";


const router = Router();


router.post(
  "/",
  createReservationController
);


export default router;