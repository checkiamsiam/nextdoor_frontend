import { Box, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import RouterLink from "next/link";
import { MdLocalPhone, MdLocationPin } from "react-icons/md";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.secondary", color: "white"  }}>
      <Container fixed>
        <Grid container spacing={2} sx={{ py: 5 }}>
          <Grid item md={3.6} xs={12} sm={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                Support
              </Typography>
              <RouterLink href="/">
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    width: "250px",
                    borderRadius: 10,
                    padding: 2,
                    border: "1px solid white",
                    transition: "all 0.5s ease-in-out",
                    ":hover": {
                      borderColor: "secondary.main",
                      color: "secondary.main",
                    },
                  }}
                >
                  <MdLocalPhone style={{ fontSize: "30px" }} />
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography variant="body1" fontWeight={500}>
                    017 123 456 789
                  </Typography>
                </Stack>
              </RouterLink>
              <RouterLink href="/">
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    width: "250px",
                    borderRadius: 10,
                    padding: 2,
                    border: "1px solid white",
                    transition: "all 0.5s ease-in-out",
                    ":hover": {
                      borderColor: "secondary.main",
                      color: "secondary.main",
                    },
                  }}
                >
                  <MdLocationPin style={{ fontSize: "30px" }} />
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography className="textInside" variant="body1">
                    Find Our Location
                  </Typography>
                </Stack>
              </RouterLink>
              <Stack spacing={2}>
                <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link sx={{ cursor: "pointer" }}>
                    <Image src="/icons/facebook.png" alt="facebook" width={30} height={30} />
                  </Link>
                  <Link sx={{ cursor: "pointer" }}>
                    <Image src="/icons/instagram.png" alt="instagram" width={30} height={30} />
                  </Link>
                  <Link sx={{ cursor: "pointer" }}>
                    <Image src="/icons/linkedin.png" alt="twitter" width={30} height={30} />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={2.8} xs={12} sm={6}>
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
          <Grid item md={2.8} xs={12} sm={6}>
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
          <Grid item md={2.8} xs={12} sm={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="secondary.main" textTransform="uppercase" fontWeight={500}>
                Stay connected
              </Typography>
              <FooterLink href="/">Next Door BD</FooterLink>
              <FooterLink href="/">BD Electronics, 2nd Floor, Rupa Tower, Jhalkuri, Narayangang</FooterLink>
              <FooterLink href="/">Zam Electronics, 2nd Floor, RS Shoping Complex, Jatrabari</FooterLink>
              <FooterLink href="/">
                Email:{" "}
                  info@nextdoorbd.shop
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
