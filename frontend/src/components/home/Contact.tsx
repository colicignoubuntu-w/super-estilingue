import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  LocationOn,
  AccessTime,
  Directions,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const mapsLink =
  "https://maps.google.com/?q=Super+Estilingue+Pedra+Bela";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          color="secondary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          LOCALIZAÇÃO
        </Typography>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 8,
          }}
        >
          Venha viver essa aventura
        </Typography>

        <Grid container spacing={6}>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Super+Estilingue+Pedra+Bela&output=embed"
                width="100%"
                height="420"
                style={{
                  border: 0,
                  borderRadius: "20px",
                }}
                loading="lazy"
              />
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <LocationOn color="secondary" />

                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Endereço
                  </Typography>

                  <Typography color="text.secondary">
                    Pedra Bela - SP
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <AccessTime color="secondary" />

                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Funcionamento
                  </Typography>

                  <Typography color="text.secondary">
                    Consulte os horários disponíveis no Sympla.
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Directions />}
                href={mapsLink}
                target="_blank"
              >
                Como Chegar
              </Button>

            </motion.div>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}

export default Contact;