import { Fab } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";

const phone = "+551193356-4688";

function WhatsAppButton() {
  return (
    <Fab
      color="success"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 64,
        height: 64,
        boxShadow: "0 8px 25px rgba(0,0,0,.35)",
        transition: ".3s",
        "&:hover": {
          transform: "scale(1.08)",
        },
      }}
    >
      <FaWhatsapp size={34} />
    </Fab>
  );
}

export default WhatsAppButton;