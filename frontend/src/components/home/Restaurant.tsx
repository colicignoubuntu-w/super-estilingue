import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  Restaurant as RestaurantIcon,
  LocalBar,
  Nature,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import restaurantMain from "../../assets/images/restaurant-main.png";
import restaurantFood from "../../assets/images/restaurant-food.png";
import restaurantDrinks from "../../assets/images/restaurant-drinks.png";
import restaurantBuffet from "../../assets/images/restaurant-buffet.png";


function Restaurant() {

  const navigate = useNavigate();

  return (
    <Box
      id="restaurant"
      sx={{
        py: 12,
        bgcolor: "#ffffff",
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
          RESTAURANTE
        </Typography>


        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 7,
          }}
        >
          Muito mais do que adrenalina
        </Typography>



        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >


          <Grid size={{ xs: 12, md: 6 }}>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <Box
                component="img"
                src={restaurantMain}
                alt="Restaurante"
                sx={{
                  width: "100%",
                  borderRadius: 5,
                  boxShadow: "0 20px 50px rgba(0,0,0,.25)",
                }}
              />

            </motion.div>

          </Grid>



          <Grid size={{ xs: 12, md: 6 }}>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >


              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Complete seu passeio com uma ótima refeição
              </Typography>



              <Typography
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.9,
                }}
              >
                Após viver toda a emoção do Super Estilingue,
                aproveite momentos especiais em nosso restaurante,
                cercado pela natureza e com vista para o lago.
                Um ambiente perfeito para relaxar com a família
                e os amigos.
              </Typography>



              <Box sx={{ display:"flex", gap:2, mb:2 }}>
                <RestaurantIcon color="secondary" />
                <Typography>
                  Buffet com comida caseira.
                </Typography>
              </Box>



              <Box sx={{ display:"flex", gap:2, mb:2 }}>
                <LocalBar color="secondary" />
                <Typography>
                  Drinks, porções e bebidas.
                </Typography>
              </Box>



              <Box sx={{ display:"flex", gap:2, mb:5 }}>
                <Nature color="secondary" />
                <Typography>
                  Vista privilegiada para o lago e montanhas.
                </Typography>
              </Box>



              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate("/checkout")}
              >
                Comprar Agora
              </Button>


            </motion.div>

          </Grid>


        </Grid>



        <Grid
          container
          spacing={3}
          sx={{
            mt:8,
          }}
        >


          {[restaurantFood, restaurantDrinks, restaurantBuffet].map(
            (image,index)=>(
              
              <Grid
                key={index}
                size={{xs:12, md:4}}
              >

                <motion.div
                  initial={{opacity:0,y:60}}
                  whileInView={{opacity:1,y:0}}
                  transition={{
                    duration:0.7,
                    delay:index*0.2,
                  }}
                  viewport={{once:true}}
                >

                  <Card
                    sx={{
                      borderRadius:4,
                      overflow:"hidden",
                    }}
                  >

                    <CardMedia
                      component="img"
                      image={image}
                      height="280"
                    />

                  </Card>


                </motion.div>

              </Grid>

            )
          )}


        </Grid>


      </Container>

    </Box>
  );
}


export default Restaurant;