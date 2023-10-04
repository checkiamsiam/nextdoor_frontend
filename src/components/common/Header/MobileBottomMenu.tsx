import { Container, Link, NoSsr, Stack, Typography } from "@mui/material";
import RouterLink from "next/link";
import { BiCart, BiGift, BiHomeCircle, BiUser } from "react-icons/bi";
const MobileBottomMenu = () => {
  return (
    <Container fixed>
      <Stack sx={{ height: "70px" }} direction="row" justifyContent="space-between" alignItems="center">
        <NoSsr>
          <Link component={RouterLink} href="/public" underline="none">
            <Stack direction="column" justifyContent="center" alignItems="center" gap="5px">
              <BiHomeCircle
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <Typography variant="subtitle2" color="text.disabled">
                Home
              </Typography>
            </Stack>
          </Link>
        </NoSsr>
        <NoSsr>
          <Link component={RouterLink} href="/public" underline="none">
            <Stack direction="column" justifyContent="center" alignItems="center" gap="5px">
              <BiGift
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <Typography variant="subtitle2" color="text.disabled">
                Offers
              </Typography>
            </Stack>
          </Link>
        </NoSsr>
        <NoSsr>
          <Link component={RouterLink} href="/public" underline="none">
            <Stack direction="column" justifyContent="center" alignItems="center" gap="5px">
              <BiCart
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <Typography variant="subtitle2" color="text.disabled">
                Cart
              </Typography>
            </Stack>
          </Link>
        </NoSsr>
        <NoSsr>
          <Link component={RouterLink} href="/public" underline="none">
            <Stack direction="column" justifyContent="center" alignItems="center" gap="5px">
              <BiUser
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <Typography variant="subtitle2" color="text.disabled">
                Account
              </Typography>
            </Stack>
          </Link>
        </NoSsr>
      </Stack>
    </Container>
  );
};

export default MobileBottomMenu;
