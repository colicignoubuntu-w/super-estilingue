import { MercadoPagoConfig, Payment } from "mercadopago";
import { prisma } from "../config/prisma";
import { createTickets } from "./ticket.service";


const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});


export async function processMercadoPagoPayment(
  paymentId: string
) {

  const payment = new Payment(client);


  const response = await payment.get({
    id: paymentId,
  });


  console.log("Pagamento Mercado Pago:");
  console.log(response.status);


  if (response.status !== "approved") {
    return;
  }


  const reservationCode =
    response.external_reference;


  if (!reservationCode) {
    throw new Error(
      "Reserva não encontrada"
    );
  }


  const reservation =
    await prisma.reservation.findUnique({
      where: {
        code: reservationCode,
      },
    });


  if (!reservation) {
    throw new Error(
      "Reserva não encontrada no banco"
    );
  }



  await prisma.payment.update({
    where: {
      reservationId: reservation.id,
    },
    data: {
      status: "APPROVED",
      mercadoPagoPaymentId: String(response.id),
      method: response.payment_method_id,
    },
  });



  await prisma.reservation.update({
    where: {
      id: reservation.id,
    },
    data: {
      status: "PAID",
    },
  });



  // Cria os ingressos com QR Code
  await createTickets(
    reservation.id
  );



  console.log(
    "Pagamento aprovado para reserva:",
    reservation.code
  );
}