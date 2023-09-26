import { theme } from "@/utils/theme";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Link,
  NoSsr,
  Stack,
  Typography,
} from "@mui/material";
import RouterLink from "next/link";
import { BiCart, BiGift, BiUser } from "react-icons/bi";
import { categories } from "../../../static/data";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          bgcolor: "background.secondary",
          color: "white",
          position: "fixed",
          width: "100%",
          zIndex: 99,
        }}
      >
        <Container fixed>
          <Hidden mdDown>
            <Grid
              container
              sx={{ height: "70px" }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={1}>
                <Typography variant="h4">Logo</Typography>
              </Grid>
              <Grid item md={5.6}>
                <SearchBar />
              </Grid>
              <Grid item md={1.8}>
                <RouterLink href="/">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="8px"
                  >
                    <BiGift
                      style={{
                        color: theme.palette.secondary.main,
                        fontSize: "30px",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">Offers</Typography>
                      <Typography fontSize="12px" color="text.disabled">
                        Latest Offer
                      </Typography>
                    </Box>
                  </Stack>
                </RouterLink>
              </Grid>
              <Grid item md={1.8}>
                <RouterLink href="/">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="8px"
                  >
                    <BiCart
                      style={{
                        color: theme.palette.secondary.main,
                        fontSize: "30px",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">Cart</Typography>
                      <Typography fontSize="12px" color="text.disabled">
                        Add To Cart
                      </Typography>
                    </Box>
                  </Stack>
                </RouterLink>
              </Grid>
              <Grid item md={1.8}>
                <RouterLink href="/">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                  >
                    <BiUser
                      style={{
                        color: theme.palette.secondary.main,
                        fontSize: "30px",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">Account</Typography>
                      <Typography fontSize="12px" color="text.disabled">
                        <NoSsr>
                          <Link
                            component={RouterLink}
                            href="/public"
                            underline="none"
                            color="text.disabled"
                            sx={{
                              transition: "all 0.3s ease-in-out",
                              ":hover": {
                                color: "white",
                              },
                            }}
                          >
                            Login
                          </Link>{" "}
                          {" or "}
                          <Link
                            component={RouterLink}
                            href="/public"
                            underline="none"
                            color="text.disabled"
                            sx={{
                              transition: "all 0.3s ease-in-out",
                              ":hover": {
                                color: "white",
                              },
                            }}
                          >
                            Register
                          </Link>
                        </NoSsr>
                      </Typography>
                    </Box>
                  </Stack>
                </RouterLink>
              </Grid>
            </Grid>
          </Hidden>
        </Container>
      </Box>
      <Hidden mdDown>
        <Box bgcolor="white">
          <Container fixed sx={{ paddingTop: "70px" }}>
            <Stack
              direction="row"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
              sx={{ paddingY: "5px" }}
            >
              {categories.map((category, i) => {
                return (
                  <Typography sx={{ cursor: "pointer" }} key={i}>
                    {category}
                  </Typography>
                );
              })}
            </Stack>
          </Container>
        </Box>
      </Hidden>
    </header>
  );
};

export default Header;
