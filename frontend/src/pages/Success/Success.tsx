import { useEffect, useState } from "react";

function Success() {
  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTicket() {
      const params = new URLSearchParams(window.location.search);

      const reservationCode = params.get("external_reference");

      console.log("Código da reserva:", reservationCode);

      if (!reservationCode) {
        setError("Código da reserva não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tickets/reservation/${reservationCode}`
        );

        if (!response.ok) {
          throw new Error("Ingresso não encontrado");
        }

        const data = await response.json();

        console.log("Resposta:", data);

        if (
          !data.success ||
          !data.tickets ||
          data.tickets.length === 0
        ) {
          throw new Error("Nenhum ingresso encontrado.");
        }

        setTicket(data.tickets[0]);
      } catch (err) {
        console.error(err);
        setError("Não foi possível gerar seu ingresso.");
      } finally {
        setLoading(false);
      }
    }

    loadTicket();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Confirmando pagamento...</h2>
        <p>Aguarde enquanto geramos seu ingresso.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Ops!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Compra realizada 🎉</h1>

      <h2>Seu ingresso Super Estilingue</h2>

      <p>Apresente este QR Code na entrada:</p>

      <img
        src={ticket.qrCode}
        alt="QR Code"
        width={250}
      />

      <p>Código do ingresso:</p>

      <strong>{ticket.code}</strong>
    </div>
  );
}

export default Success;