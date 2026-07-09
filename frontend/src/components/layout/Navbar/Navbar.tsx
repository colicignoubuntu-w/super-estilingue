import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Super Estilingue
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Restaurante</Button>
          <Button color="inherit">Estilingue</Button>
          <Button color="inherit">Contato</Button>
          <Button variant="contained" color="secondary">
            Comprar
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;