import PrimaryButton from "@/components/common/Button/PrimaryButton";
import { Card, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const OrderSummery = () => {
  const router = useRouter();
  return (
    <Card sx={{ bgcolor: "white", p: 2, boxShadow: 2, position: "sticky", top: "80px", left: 0 }}>
      <Stack spacing={1}>
        <Typography variant="subtitle1">Order Summary</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">iphone (1x)</Typography>
          <Typography fontSize="14px">600 ৳</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">vivo (1x)</Typography>
          <Typography fontSize="14px">600 ৳</Typography>
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Sub Total</Typography>
          <Typography color="secondary.dark" fontSize="14px">
            1200 ৳
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Shipping Charge</Typography>
          <Typography color="secondary.dark" fontSize="14px">
            60 ৳
          </Typography>
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Total</Typography>
          <Typography color="secondary.dark" fontSize="14px">
            60 ৳
          </Typography>
        </Stack>
        
      
      </Stack>
    </Card>
  );
};

export default OrderSummery;
