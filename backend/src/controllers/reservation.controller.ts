import { Request, Response } from "express";
import { createReservation } from "../services/reservation.service";


export async function createReservationController(
  req: Request,
  res: Response
) {

  try {

    const reservation = await createReservation(req.body);


    return res.status(201).json({
      success: true,
      reservation
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message
    });

  }

}