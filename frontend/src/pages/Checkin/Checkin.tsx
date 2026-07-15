import { useState } from "react";


export default function Checkin() {


  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);



  async function validate() {


    try {

      setLoading(true);


      const response =
        await fetch(
          "http://localhost:3001/api/tickets/validate",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              code
            })

          }
        );



      const data =
        await response.json();



      setResult(data);



    } catch(error) {


      console.error(error);


      setResult({
        success:false,
        message:"Erro de conexão"
      });



    } finally {


      setLoading(false);


    }


  }




  return (

    <div>


      <h1>
        Check-in Super Estilingue 🎯
      </h1>



      <input

        placeholder="Código do ingresso"

        value={code}

        onChange={
          e => setCode(
            e.target.value
          )
        }

      />



      <br />



      <button

        onClick={validate}

        disabled={loading}

      >

        {
          loading
          ?
          "Validando..."
          :
          "Validar ingresso"
        }


      </button>




      {
        result && (

          <div>


            <h2>

              {
                result.success
                ?
                "✅ Entrada liberada"
                :
                "❌ Entrada negada"
              }

            </h2>



            <p>

              {
                result.message
              }

            </p>



            {
              result.ticket && (

                <div>

                  <p>
                    Cliente:
                    {" "}
                    {
                      result.ticket.reservation.buyerName
                    }
                  </p>


                  <p>
                    Email:
                    {" "}
                    {
                      result.ticket.reservation.buyerEmail
                    }
                  </p>


                </div>

              )
            }


          </div>

        )
      }



    </div>

  );

}