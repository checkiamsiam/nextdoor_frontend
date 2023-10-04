import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.secondary", color: "white" }}>
      <Container fixed>
        <Grid container spacing={2} sx={{ py: 5 }}>
          <Grid item md={3.6}>
            <Stack>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                Support
              </Typography>
              <Link>
              </Link>
            </Stack>
          </Grid>
          <Grid item md={2.8}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                About Us
              </Typography>
              <FooterLink href="/">About us</FooterLink>
              <FooterLink href="/">Shop Address</FooterLink>
              <FooterLink href="/">Careers</FooterLink>
              <FooterLink href="/">Blog</FooterLink>
              <FooterLink href="/">Join Our Community</FooterLink>
              <FooterLink href="/">Order Tracking</FooterLink>
              <FooterLink href="/">Delivery Terms ﹠ Condition</FooterLink>
            </Stack>
          </Grid>
          <Grid item md={2.8}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                Help
              </Typography>
              <FooterLink href="/">EMI Policy</FooterLink>
              <FooterLink href="/">Privacy Policy</FooterLink>
              <FooterLink href="/">Refund Policy</FooterLink>
              <FooterLink href="/">Warranty Policy</FooterLink>
              <FooterLink href="/">How to Exchange Any Device</FooterLink>
              <FooterLink href="/">Gift Voucher</FooterLink>
              <FooterLink href="/">Complain / Advice</FooterLink>
            </Stack>
          </Grid>
          <Grid item md={2.8}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                Stay connected
              </Typography>
              <FooterLink href="/">Next Door BD</FooterLink>
              <FooterLink href="/">BD Electronics, 2nd Floor, Rupa Tower, Jhalkuri, Narayangang</FooterLink>
              <FooterLink href="/">Zam Electronics, 2nd Floor, RS Shoping Complex, Jatrabari</FooterLink>
              <FooterLink href="/">
                Email:{" "}
                <Link sx={{ textDecoration: "none" }} color="secondary.main">
                  info@nextdoorbd.shop
                </Link>
              </FooterLink>
            </Stack>
          </Grid>
        </Grid>
        <hr />
        <Typography textAlign="center" variant="subtitle2" sx={{ py: 1, color: "secondary.main" }}>
          © 2023 Thanks From NextDoorBD™ Ltd. | All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
