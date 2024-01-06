import { signOut } from "@/utils/auth/signOut";
import { theme } from "@/utils/theme";
import { Box, Grid, Stack, Typography } from "@mui/material";
import RouterLink from "next/link";
import { BiCart, BiGift, BiUser } from "react-icons/bi";
import CustomLink from "../Button/CustomLink";
import SearchBar from "./SearchBar";
import { getSession } from "@/utils/session/session";

const HeaderMain = () => {
  const session = getSession();
  return (
    <Grid
      container
      sx={{ height: "70px" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item md={1}>
        <RouterLink href="/">
          <Typography variant="h4">Logo</Typography>
        </RouterLink>
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
                color: theme.palette.secondary.lighter,
                fontSize: "30px",
              }}
            />
            <Box>
              <Typography variant="subtitle1">Offers</Typography>
              <Typography fontSize="12px" sx={{ color: "grey.300" }}>
                Latest Offer
              </Typography>
            </Box>
          </Stack>
        </RouterLink>
      </Grid>
      <Grid item md={1.8}>
        <RouterLink href="/checkout/cart">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="8px"
          >
            <BiCart
              style={{
                color: theme.palette.secondary.lighter,
                fontSize: "30px",
              }}
            />
            <Box>
              <Typography variant="subtitle1">Cart</Typography>
              <Typography fontSize="12px" sx={{ color: "grey.300" }}>
                Add To Cart
              </Typography>
            </Box>
          </Stack>
        </RouterLink>
      </Grid>
      <Grid item md={1.8}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="5px"
        >
          <BiUser
            style={{
              color: theme.palette.secondary.lighter,
              fontSize: "30px",
            }}
          />
          <Box>
            <Typography variant="subtitle1">
              {session?.user ? session?.user?.email : "Account"}
            </Typography>
            <Typography fontSize="12px" color="text.disabled">
              {session?.user && session?.accessToken ? (
                <CustomLink
                  href="/profile"
                  sx={{
                    color: "grey.300",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  Profile
                </CustomLink>
              ) : (
                <CustomLink
                  href="/login"
                  sx={{
                    color: "grey.300",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  Login
                </CustomLink>
              )}
              {" or "}
              {session?.user && session?.accessToken ? (
                <Typography
                  display="inline-block"
                  fontSize="12px"
                  onClick={() => signOut()}
                  sx={{
                    color: "grey.300",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "white",
                    },
                    cursor: "pointer",
                  }}
                >
                  logout
                </Typography>
              ) : (
                <CustomLink
                  href="/register"
                  sx={{
                    color: "grey.300",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  Register
                </CustomLink>
              )}
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HeaderMain;
