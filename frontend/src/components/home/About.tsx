import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import aboutImage from "../../assets/images/about.png";
import { links } from "../../data/links";

function About() {
  return (
    <Box
     id="about"
      sx={{
        py: 10,
        bgcolor: "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt="Super Estilingue"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 15px 40px rgba(0,0,0,.25)",
              }}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography
              sx={{
                color: "#ff6b00",
                fontWeight: 700,
                mb: 1,
              }}
            >
              SUPER ESTILINGUE
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              Uma experiência inesquecível
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              O Super Estilingue é uma das atrações mais radicais
              de Pedra Bela. Com equipamentos modernos, equipe
              especializada e uma vista incrível da serra, você
              viverá uma experiência única, segura e cheia de
              adrenalina.
            </Typography>

            <Box sx={{ mb: 1 }}>
              ✅ Equipamentos certificados
            </Box>

            <Box sx={{ mb: 1 }}>
              ✅ Equipe especializada
            </Box>

            <Box sx={{ mb: 1 }}>
              ✅ Vista panorâmica da Serra
            </Box>

            <Box sx={{ mb: 4 }}>
              ✅ Experiência para guardar na memória
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
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

export default About;