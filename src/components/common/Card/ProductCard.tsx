import { IProduct } from "@/interface/product.interface";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

type IProps = {
  product: IProduct;
};

const ProductCard = ({ product }: IProps) => {
  const { title, regularPrice, id, images, salePrice, category, rating } =
    product;
  return (
    <Box
      sx={{ borderRadius: 1.5, boxShadow: 1, bgcolor: "white", height: "100%" }}
    >
      <Box
        sx={{
          borderRadius: 1.5,
          height: "180px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Box
          sx={{
            position: "relative",
            aspectRatio: "190/150",
            borderRadius: 1.5,
          }}
        >
          <Image src={images[0]} alt={title} layout="fill" />
        </Box>
      </Box>

      <Box
        sx={{
          height: "80px",
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, fontSize: 14, textAlign: "center" }}
        >
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: 13, color: "text.secondary" }}
          >
            ${salePrice}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: 13,
            }}
          >
            ${regularPrice}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
