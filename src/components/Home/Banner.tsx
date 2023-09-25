import { Box, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9}>
            <Box>
              <Slider {...settings}>
                <Box sx={{ aspectRatio: "965/500", position: "relative" }}>
                  <Image
                    src="/images/banner_1.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
                <Box sx={{ aspectRatio: "965/500", position: "relative" }}>
                  <Image
                    src="/images/banner_2.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
                <Box sx={{ aspectRatio: "965/500", position: "relative" }}>
                  <Image
                    src="/images/banner_3.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
                <Box sx={{ aspectRatio: "965/500", position: "relative" }}>
                  <Image
                    src="/images/banner_4.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Grid container spacing={3}>
              <Grid item xs={6} lg={12}>
                <Box sx={{ position: "relative", aspectRatio: "400/240" }}>
                  <Image
                    src="/images/banner_5.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} lg={12}>
                <Box sx={{ position: "relative", aspectRatio: "400/240" }}>
                  <Image
                    src="/images/banner_6.webp"
                    alt="banner"
                    layout="fill"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
