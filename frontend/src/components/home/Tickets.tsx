import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import {
  CheckCircle,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


function Tickets() {

  const navigate = useNavigate();


  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#fafafa",
      }}
    >

      <Container maxWidth="md">


        <Typography
          color="secondary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          INGRESSOS
        </Typography>



        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 7,
          }}
        >
          Garanta sua aventura
        </Typography>




        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >


          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 20px 50px rgba(0,0,0,.15)",
              p: 3,
            }}
          >


            <CardContent>



              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Super Estilingue
              </Typography>




              {[
                "Equipamentos certificados",
                "Equipe especializada",
                "Experiência radical",
                "Vista incrível de Pedra Bela",
                "Compra rápida e segura online",
              ].map((item) => (

                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >

                  <CheckCircle color="secondary" />

                  <Typography>
                    {item}
                  </Typography>


                </Box>

              ))}




              <Typography
                variant="h3"
                color="secondary"
                sx={{
                  fontWeight: 800,
                  textAlign: "center",
                  mt: 5,
                  mb: 4,
                }}
              >
                Consulte os valores dos ingressos
              </Typography>




              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >


                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/checkout")}
                >
                  Comprar Agora
                </Button>


              </Box>



            </CardContent>


          </Card>


        </motion.div>


      </Container>


    </Box>
  );
}


export default Tickets;