import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import gallery1 from "../../assets/images/gallery-1.png";
import gallery2 from "../../assets/images/gallery-2.png";
import gallery3 from "../../assets/images/gallery-3.png";

const images = [gallery1, gallery2, gallery3];

function Gallery() {
  return (
    <Box
     id="gallery"
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
          GALERIA
        </Typography>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 8,
          }}
        >
          Viva momentos inesquecíveis
        </Typography>

        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    borderRadius: 4,
                    transition: ".35s",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,.18)",

                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Gallery;