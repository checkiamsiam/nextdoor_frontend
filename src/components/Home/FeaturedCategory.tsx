import { categories } from "@/static/data";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const FeaturedCategory = () => {
  // get current device
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
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
        {categories?.slice(0, 15)?.map((category, i) => (
          <Grid item xs={3} sm={3} lg={1.5} key={category.id}>
            <Link href={`/category/${category.slug}`}>
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
                  width={isMobile ? 30 : 50}
                  height={isMobile ? 30 : 50}
                />

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: 12, sm: 16 },
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
        <Grid item xs={3} sm={3} lg={1.5}>
          <Link href="/category">
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: 1,
                bgcolor: "secondary.light",
                p: 2,
                cursor: "pointer",
                height: "100%",
                color: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HiMiniArrowTopRightOnSquare size={35} />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: 12, sm: 16 },
                  fontWeight: 500,
                }}
              >
                View All
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedCategory;
