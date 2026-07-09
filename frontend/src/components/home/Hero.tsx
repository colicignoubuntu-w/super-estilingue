import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import videoHome from "../../assets/videos/video-home.mp4";
import { links } from "../../data/links";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoHome} type="video/mp4" />
      </video>

      {/* Camada escura */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.55)",
        }}
      />

      {/* Conteúdo */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: 650 }}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                color: "#fff",
                mb: 3,
                fontSize: {
                  xs: "2.5rem",
                  md: "4rem",
                },
              }}
            >
              Viva a maior adrenalina de Pedra Bela
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#ddd",
                mb: 5,
                fontSize: {
                  xs: "1.2rem",
                  md: "1.5rem",
                },
              }}
            >
              O Super Estilingue leva você a uma experiência única.
              Garanta seu ingresso online em poucos segundos.
            </Typography>

            <Button
              size="large"
              variant="contained"
              color="secondary"
              href={links.sympla}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar Agora
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;