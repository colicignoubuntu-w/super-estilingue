import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TicketData {
  code: string;
  qrCode: string;
  used: boolean;
  reservation: {
    buyerName: string;
    quantity: number;
    status: string;
  };
}


export default function Ticket() {

  const { code } = useParams();

  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadTicket() {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tickets/${code}`
        );


        const data = await response.json();


        if(data.success){

          setTicket(data.ticket);

        }


      } catch(error) {

        console.error(
          "Erro ao buscar ingresso:",
          error
        );

      } finally {

        setLoading(false);

      }

    }


    if(code){

      loadTicket();

    }

  }, [code]);



  if(loading){

    return (
      <h2>
        Carregando ingresso...
      </h2>
    );

  }



  if(!ticket){

    return (
      <h2>
        Ingresso não encontrado.
      </h2>
    );

  }



  return (

    <div>

      <h1>
        🎢 Super Estilingue
      </h1>


      <h2>
        Ingresso confirmado ✅
      </h2>


      <p>
        Nome:
        {" "}
        {ticket.reservation.buyerName}
      </p>


      <p>
        Quantidade:
        {" "}
        {ticket.reservation.quantity}
      </p>



      <img
        src={ticket.qrCode}
        alt="QR Code do ingresso"
        width={250}
      />



      <p>
        Código:
      </p>


      <strong>
        {ticket.code}
      </strong>



      <p>
        Apresente este QR Code na entrada.
      </p>



    </div>

  );

}