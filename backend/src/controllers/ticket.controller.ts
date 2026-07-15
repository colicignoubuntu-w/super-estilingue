import { Request, Response } from "express";

import {
  validateTicket,
  getTicketByCode,
  getTicketsByReservationCode
} from "../services/ticket.service";



export async function validateTicketController(
  req: Request,
  res: Response
) {

  try {

    const { code } = req.body;


    const ticket =
      await validateTicket(code);


    return res.status(200).json({
      success: true,
      message: "Ingresso válido.",
      ticket,
    });


  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

}




export async function getTicketController(
  req: Request,
  res: Response
) {

  try {

    const code =
      String(req.params.code);


    const ticket =
      await getTicketByCode(code);


    return res.status(200).json({
      success: true,
      ticket,
    });


  } catch (error: any) {

    return res.status(404).json({
      success: false,
      message: error.message,
    });

  }

}





export async function getTicketsByReservationController(
  req: Request,
  res: Response
) {

  try {

    const code =
      String(req.params.code);


    const tickets =
      await getTicketsByReservationCode(code);


    return res.status(200).json({
      success: true,
      tickets,
    });


  } catch (error: any) {

    return res.status(404).json({
      success: false,
      message: error.message,
    });

  }

}