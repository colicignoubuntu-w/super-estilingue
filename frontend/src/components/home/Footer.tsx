import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import {
  Instagram,
  WhatsApp,
  Email,
  LocationOn,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111",
        color: "#fff",
        py: 8,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: "center",
          }}
        >
          Super Estilingue
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#bbb",
            mb: 5,
          }}
        >
          Viva uma experiência inesquecível em Pedra Bela.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", mb: 5 }}
        >

          <IconButton
            color="inherit"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <Instagram />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://wa.me/5500000000000"
            target="_blank"
          >
            <WhatsApp />
          </IconButton>

          <IconButton
            color="inherit"
            href="mailto:contato@superestilingue.com.br"
          >
            <Email />
          </IconButton>

          <IconButton color="inherit">
            <LocationOn />
          </IconButton>

        </Stack>

        <Typography
          sx={{
            textAlign: "center",
            color: "#888",
          }}
        >
          © {new Date().getFullYear()} Super Estilingue.
          Todos os direitos reservados.
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;