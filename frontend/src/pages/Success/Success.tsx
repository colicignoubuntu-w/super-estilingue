import { useEffect, useState } from "react";


function Success() {


  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    async function loadTicket() {


      const params =
        new URLSearchParams(
          window.location.search
        );


      const reservationCode =
        params.get(
          "external_reference"
        );



      console.log(
        "Reserva:",
        reservationCode
      );



      if(!reservationCode){

        console.error(
          "Reserva não encontrada na URL"
        );

        setLoading(false);

        return;

      }



      try {


        const response =
          await fetch(
            `http://localhost:3001/api/tickets/reservation/${reservationCode}`
          );



        const data =
          await response.json();



        console.log(
          "Resposta ingressos:",
          data
        );



        if(data.success){

          setTicket(
            data.tickets[0]
          );

        }



      } catch(error){


        console.error(
          error
        );


      } finally {


        setLoading(false);


      }


    }



    loadTicket();


  }, []);




  if(loading){

    return (

      <h2>
        Gerando seu ingresso...
      </h2>

    );

  }




  if(!ticket){

    return (

      <h2>
        Não foi possível encontrar seu ingresso.
      </h2>

    );

  }




  return (

    <div>


      <h1>
        Compra realizada 🎉
      </h1>



      <h2>
        Seu ingresso Super Estilingue
      </h2>



      <img

        src={
          ticket.qrCode
        }

        alt="QR Code"

        width={250}

      />



      <p>
        Código do ingresso:
      </p>



      <strong>
        {ticket.code}
      </strong>



    </div>

  );

}



export default Success;