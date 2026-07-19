import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useEffect, useState } from "react";

const TICKET_URL = "https://appticket.com.br/super-estilingue";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openTicketPage = () => {
    window.location.href = TICKET_URL;
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? "rgba(0,0,0,.85)"
          : "rgba(0,0,0,.25)",
        backdropFilter: "blur(10px)",
        transition: "all .35s ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Super Estilingue
        </Typography>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button color="inherit" href="#home">
            Home
          </Button>

          <Button color="inherit" href="#about">
            Sobre
          </Button>

          <Button color="inherit" href="#gallery">
            Galeria
          </Button>

          <Button color="inherit" href="#tickets">
            Ingressos
          </Button>

          <Button color="inherit" href="#restaurant">
            Restaurante
          </Button>

          <Button color="inherit" href="#contact">
            Contato
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={openTicketPage}
            sx={{
              ml: 2,
              fontWeight: "bold",
            }}
          >
            Comprar Agora
          </Button>
        </Box>

        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <List>
            <ListItemButton
              component="a"
              href="#home"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="#about"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Sobre" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="#gallery"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Galeria" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="#tickets"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Ingressos" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="#restaurant"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Restaurante" />
            </ListItemButton>

            <ListItemButton
              component="a"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Contato" />
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setOpen(false);
                openTicketPage();
              }}
            >
              <ListItemText primary="Comprar Agora" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;