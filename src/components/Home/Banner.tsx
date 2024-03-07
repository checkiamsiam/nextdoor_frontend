import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "../common/Button/SliderButtons";
import CustomImage from "../common/Image/CustomImage";

const Banner = () => {
  const settings: any = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (<CustomPrevArrow />) as any,
    nextArrow: (<CustomNextArrow />) as any,
    // dots: true,
    // customPaging: (i) => <CustomDot key={i} />,
  };

  return (
    <>
      <Container fixed sx={{ py: 4, pt: { xs: "90px", md: "20px" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8.5}>
            <Box sx={{ position: "relative" }}>
              <Slider {...settings}>
                <CustomImage
                  src="/images/banner_1.webp"
                  alt="banner"
                  ratio="965/500"
                />
                <CustomImage
                  src="/images/banner_2.webp"
                  alt="banner"
                  ratio="965/500"
                />
                <CustomImage
                  src="/images/banner_3.webp"
                  alt="banner"
                  ratio="965/500"
                />
                <CustomImage
                  src="/images/banner_4.webp"
                  alt="banner"
                  ratio="965/500"
                />
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3.5}>
            <Grid container spacing={3}>
              <Grid item xs={6} lg={12}>
                <CustomImage
                  src="/images/banner_5.webp"
                  alt="banner"
                  ratio="400/240"
                />
              </Grid>
              <Grid item xs={6} lg={12}>
                <CustomImage
                  src="/images/banner_6.webp"
                  alt="banner"
                  ratio="400/240"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
