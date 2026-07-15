import { useEffect, useState } from "react";


function Success() {

  const [ticket, setTicket] = useState<any>(null);


  useEffect(() => {

    async function loadTicket() {

      try {

        const response =
          await fetch(
            `${import.meta.env.VITE_API_URL}/api/reservations`
          );


        const data =
          await response.json();


        if(data.success) {

          setTicket(
            data.tickets[0]
          );

        }


      } catch(error) {

        console.error(
          error
        );

      }

    }


    loadTicket();


  }, []);



  if(!ticket) {

    return (
      <div>
        <h2>
          Gerando seu ingresso...
        </h2>
      </div>
    );

  }



  return (

    <div
      style={{
        textAlign:"center",
        padding:"40px"
      }}
    >

      <h1>
        Compra realizada 🎉
      </h1>


      <p>
        Apresente este QR Code na entrada.
      </p>


      <img
        src={ticket.qrCode}
        alt="QR Code ingresso"
        width={250}
      />


      <h3>
        Código do ingresso:
      </h3>


      <p>
        {ticket.code}
      </p>


    </div>

  );

}


export default Success;