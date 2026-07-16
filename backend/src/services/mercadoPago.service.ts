import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});


export async function createMercadoPagoPreference(data: {
  code: string;
  quantity: number;
  total: number;
  buyerName: string;
  buyerEmail: string;
}) {

  const preference = new Preference(client);


  const response = await preference.create({

    body: {

      items: [

        {
          id: data.code,

          title: "Ingresso Super Estilingue",

          description:
            "Entrada para o Super Estilingue",

          quantity: data.quantity,

          unit_price: Number(
            (data.total / data.quantity).toFixed(2)
          ),

          currency_id: "BRL",
        },

      ],


      payer: {

        name: data.buyerName,

        email: data.buyerEmail,

      },


      // Código único da reserva
      external_reference: data.code,


      // Retorno do cliente após pagamento
      back_urls: {

        success:
          `https://superestilinguepb.com.br/success?external_reference=${data.code}`,

        failure:
          "https://superestilinguepb.com.br/failure",

        pending:
          "https://superestilinguepb.com.br/pending",

      },


      // Webhook Mercado Pago
      notification_url:
        "https://super-estilingue.onrender.com/api/payments/webhook"


    },

  });


  console.log(
    "Preferência criada:",
    response.id
  );


  return response;

}