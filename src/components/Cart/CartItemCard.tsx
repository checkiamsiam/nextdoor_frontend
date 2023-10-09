import latestProducts from "@/static/latestProducts";
import { Box, Card, Checkbox, Hidden, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";

const CartItemCard = () => {
  const [count, setCount] = useState(1);
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
                "& svg": {
                  color: "error.main"
                }
              }}
            >
              <AiTwotoneDelete style={{ fontSize: "20px"  }} />
            </Box>
            <Stack direction="row">
              <Table size="small">
                <TableBody>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        borderBottom: "none",
                        border: "1px solid",
                        borderColor: "grey.300",
                        textAlign: "center",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        ":hover": {
                          bgcolor: "primary.lighter",
                        },
                      }}
                      onClick={() => (count > 1 ? setCount(count - 1) : null)}
                    >
                      <AiOutlineMinus />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{count}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        ":hover": {
                          bgcolor: "primary.lighter",
                        },
                      }}
                      onClick={() => (count < 10 ? setCount(count + 1) : null)}
                    >
                      <AiOutlinePlus />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CartItemCard;
