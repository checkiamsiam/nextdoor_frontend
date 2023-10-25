import { Card, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { AiTwotoneDelete } from "react-icons/ai";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", px: 1, boxShadow: 2 }}>
        <Stack spacing={1} direction="row" justifyContent="space-between" sx={{ fontSize: "10px" }}>
          <FormControlLabel
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
            }}
            control={<Checkbox size="small" />}
            label="Select all"
          />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                color: "secondary.main",
              },
              "& svg": {
                color: "error.main",
              },
            }}
          >
            <AiTwotoneDelete style={{ fontSize: "16px" }} />
            <Typography variant="body2">Delete</Typography>
          </Stack>
        </Stack>
      </Card>
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </>
  );
};

export default CartItems;
