import { Request, Response } from "express";
import { processMercadoPagoPayment } from "../services/payment.service";


export async function mercadoPagoWebhook(
  req: Request,
  res: Response
){

  console.log(
    "Webhook Mercado Pago recebido:"
  );

  console.log(req.body);



  try {

    if(
      req.body.type === "payment"
    ){

      const paymentId =
        req.body.data.id;


      await processMercadoPagoPayment(
        paymentId
      );

    }


    res.sendStatus(200);


  } catch(error){

    console.error(error);

    res.sendStatus(500);

  }

}