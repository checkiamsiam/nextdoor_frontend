import { Container, Stack, Typography } from "@mui/material";
import { BiCart, BiGift, BiHomeCircle, BiUser } from "react-icons/bi";
import CustomLink from "../Button/CustomLink";
const MobileBottomMenu = () => {
  return (
    <Container fixed>
      <Stack sx={{ height: "70px" }} direction="row" justifyContent="space-between" alignItems="center">
        <CustomLink href="/">
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
        </CustomLink>
        <CustomLink href="/public">
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
        </CustomLink>
        <CustomLink href="/checkout/cart">
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
        </CustomLink>
        <CustomLink href="/public">
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
        </CustomLink>
      </Stack>
    </Container>
  );
};

export default MobileBottomMenu;
