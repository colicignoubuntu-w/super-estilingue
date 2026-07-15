import crypto from "crypto";
import QRCode from "qrcode";
import { prisma } from "../config/prisma";


export async function createTickets(
  reservationId: number
) {

  console.log("Iniciando criação dos ingressos");


  const reservation =
    await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
    });


  if (!reservation) {
    throw new Error(
      "Reserva não encontrada"
    );
  }


  console.log(
    "Quantidade:",
    reservation.quantity
  );


  const tickets = [];


  for (
    let i = 0;
    i < reservation.quantity;
    i++
  ) {

    const code =
      crypto.randomUUID();


    console.log(
      "Criando ingresso:",
      code
    );


    const qrCode =
      await QRCode.toDataURL(code);


    const ticket =
      await prisma.ticket.create({
        data: {
          code,
          qrCode,
          reservationId: reservation.id,
        },
      });


    tickets.push(ticket);

  }


  console.log(
    "Ingressos criados:",
    tickets.length
  );


  return tickets;

}




export async function validateTicket(
  code: string
) {

  const ticket =
    await prisma.ticket.findUnique({
      where: {
        code,
      },
      include: {
        reservation: true,
      },
    });


  if (!ticket) {
    throw new Error(
      "Ingresso não encontrado."
    );
  }


  if (ticket.used) {
    throw new Error(
      "Ingresso já utilizado."
    );
  }


  const updatedTicket =
    await prisma.ticket.update({
      where: {
        id: ticket.id,
      },
      data: {
        used: true,
      },
      include: {
        reservation: true,
      },
    });


  return updatedTicket;

}




export async function getTicketByCode(
  code: string
) {

  const ticket =
    await prisma.ticket.findUnique({
      where: {
        code,
      },
      include: {
        reservation: true,
      },
    });


  if (!ticket) {
    throw new Error(
      "Ingresso não encontrado."
    );
  }


  return ticket;

}




export async function getTicketsByReservationCode(
  code: string
) {

  const reservation =
    await prisma.reservation.findUnique({
      where: {
        code,
      },
      include: {
        tickets: true,
      },
    });


  if (!reservation) {
    throw new Error(
      "Reserva não encontrada."
    );
  }


  return reservation.tickets;

}