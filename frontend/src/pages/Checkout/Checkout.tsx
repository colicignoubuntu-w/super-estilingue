import { useState } from "react";


export default function Checkout() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);



  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    if (!acceptedTerms) {

      alert(
        "Aceite os termos para continuar"
      );

      return;
    }



    try {

      setLoading(true);



      const response =
        await fetch(
          `${import.meta.env.VITE_API_URL}/api/reservations`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({

              operatingDayId: 1,

              buyerName: name,

              buyerEmail: email,

              buyerPhone: "11999999999",

              quantity: 1,

              acceptedTerms: true

            })

          }
        );



      const data =
        await response.json();



      console.log(
        "STATUS:",
        response.status
      );


      console.log(
        "RESPOSTA BACKEND:",
        data
      );



      const paymentUrl =
        data.reservation?.paymentUrl;



      if (paymentUrl) {

        window.location.href =
          paymentUrl;


      } else {

        alert(
          "Erro ao criar pagamento"
        );

      }



    } catch (error) {


      console.error(
        error
      );


      alert(
        "Erro de conexão com servidor"
      );



    } finally {


      setLoading(false);


    }

  }




  return (

    <div>

      <h1>
        Comprar ingresso
      </h1>



      <form
        onSubmit={handleSubmit}
      >



        <input

          placeholder="Nome"

          value={name}

          onChange={
            e => setName(
              e.target.value
            )
          }

          required

        />



        <br />



        <input

          placeholder="Email"

          type="email"

          value={email}

          onChange={
            e => setEmail(
              e.target.value
            )
          }

          required

        />



        <br />



        <label>


          <input

            type="checkbox"

            checked={acceptedTerms}

            onChange={
              e =>
                setAcceptedTerms(
                  e.target.checked
                )
            }

          />


          Aceito os termos de responsabilidade


        </label>



        <br />



        <button

          type="submit"

          disabled={loading}

        >

          {
            loading

            ?

            "Criando pagamento..."

            :

            "Comprar ingresso"

          }


        </button>



      </form>


    </div>

  );

}