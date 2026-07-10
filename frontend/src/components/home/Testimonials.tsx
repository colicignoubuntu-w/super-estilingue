import {
  Box,
  Card,
  CardContent,
  Container,
  Rating,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Henrique",
    city: "São Paulo - SP",
    text: "Uma experiência inesquecível! A equipe transmite muita segurança e a vista é maravilhosa.",
  },
  {
    name: "Mariana Oliveira",
    city: "Campinas - SP",
    text: "Adrenalina do começo ao fim! O restaurante também é excelente. Recomendo para toda a família.",
  },
  {
    name: "Rafael Souza",
    city: "Bragança Paulista - SP",
    text: "Foi uma das melhores experiências que já vivi. Voltarei com certeza!",
  },
];

function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{ py: 12, bgcolor: "#fafafa" }}>
      <Container maxWidth="lg">
        <Typography
          color="secondary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          DEPOIMENTOS
        </Typography>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 7,
          }}
        >
          O que nossos visitantes dizem
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                  }}
                >
                  <CardContent>
                    <Rating value={5} readOnly sx={{ mb: 2 }} />

                    <Typography
                      sx={{
                        mb: 3,
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      "{item.text}"
                    </Typography>

                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>

                    <Typography color="text.secondary">
                      {item.city}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;