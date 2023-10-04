import { theme } from "@/utils/theme";
import { Box, Grid, Link, NoSsr, Stack, Typography } from "@mui/material";
import RouterLink from "next/link";
import { BiCart, BiGift, BiUser } from "react-icons/bi";
import SearchBar from "./SearchBar";

const HeaderMain = () => {
  return (
    <Grid container sx={{ height: "70px" }} direction="row" justifyContent="space-between" alignItems="center">
      <Grid item md={1}>
        <Typography variant="h4">Logo</Typography>
      </Grid>
      <Grid item md={5.6}>
        <SearchBar />
      </Grid>
      <Grid item md={1.8}>
        <RouterLink href="/">
          <Stack direction="row" justifyContent="center" alignItems="center" gap="8px">
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
          <Stack direction="row" justifyContent="center" alignItems="center" gap="8px">
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
          <Stack direction="row" justifyContent="center" alignItems="center" gap="5px">
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
  );
};

export default HeaderMain;
