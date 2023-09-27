import { categories } from "@/static/data";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = () => {
  return (
    <Container fixed sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontSize: 20, textAlign: "center" }}>
        Featured Categories
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Get Your Desired Product from Featured Category!
      </Typography>

      <Grid container spacing={1.25} sx={{ mt: 0 }}>
        {categories.map((category, i) => (
          <Grid item xs={4} sm={3} lg={1.5} key={i}>
            <Link href={`/category/${category.name}`}>
              <Box
                sx={{
                  borderRadius: 3,
                  boxShadow: 1,
                  bgcolor: "white",
                  p: 2,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  transition: "all 0.3s ease",
                  "& img": {
                    filter: "grayscale(100%)",
                  },
                  "&:hover": {
                    boxShadow: 3,
                    "& img": {
                      filter: "grayscale(0%)",
                    },
                    "& p": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={50}
                  height={50}
                />

                <Typography
                  variant="body1"
                  sx={{ fontSize: 16, fontWeight: 500, transition: "all 0.2s" }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedCategory;
