import latestProducts from "@/static/latestProducts";
import { Box, Card, Checkbox, Hidden, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

const CartItemCard = () => {
  return (
    <Card sx={{ bgcolor: "white", px: 1, boxShadow: 2, mt: 2 }}>
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" py={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Checkbox size="small" />
            <Hidden smDown>
              <Image src={latestProducts[0].images[0]} alt="product" width="60" height="60" style={{ borderRadius: "5px" }} />
            </Hidden>
            <Box>
              <Typography fontSize="14px">{latestProducts[0].title}</Typography>
              <Typography color="secondary.dark" fontSize="14px">
                {latestProducts[0].salePrice} ৳
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  color: "secondary.main",
                },
              }}
            >
              <AiTwotoneDelete style={{ fontSize: "20px" }} />
            </Box>
            <Stack direction="row">
              <Box
                sx={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid grey",
                  backgroundColor: "background.paper",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  ":hover": {
                    color: "secondary.main",
                    borderColor: "secondary.main",
                  },
                }}
              >
                <RiSubtractFill />
              </Box>
              <Typography sx={{ px: "10px", display: "flex", alignItems: "center" }}>5</Typography>
              <Box
                sx={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid grey",
                  backgroundColor: "background.paper",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  ":hover": {
                    color: "secondary.main",
                    borderColor: "secondary.main",
                  },
                }}
              >
                <AiOutlinePlus />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CartItemCard;
