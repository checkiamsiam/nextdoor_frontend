import { IProduct } from "@/interface/product.interface";
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "../Button/CustomLink";

type IProps = {
  product: IProduct;
};

const ProductCard = ({ product }: IProps) => {
  const router = useRouter();
  const { title, regularPrice, id, images, salePrice, slug, category, rating } =
    product;
  return (
    <Box
      sx={{
        borderRadius: 1,
        boxShadow: 1,
        bgcolor: "white",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 0,
            zIndex: 1,
            py: 0.1,
            px: 1,
            bgcolor: "primary.dark",
            color: "white",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 400, fontSize: 12 }}>
            Save: $500
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            aspectRatio: "200/180",
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            overflow: "hidden",
            objectFit: "cover",
            cursor: "pointer",
            "& img": {
              transition: "all 0.2s linear",
            },
            "&:hover": {
              "& img": {
                transform: "scale(1.1)",
              },
            },
          }}
          onClick={() => router.push(`/product/${slug}`)}
        >
          <Image src={images[0]} alt={title} layout="fill" />
        </Box>
      </Box>

      <Divider
        variant="fullWidth"
        sx={{
          height: 3,
          bgcolor: "grey.200",
        }}
      />

      <Box
        sx={{
          height: "118px",
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <CustomLink
          href={`/product/${slug}`}
          sx={{
            color: "text.primary",
            lineHeight: 1.2,
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 14 }}>
            {title.length > 70 ? title.slice(0, 70) + "..." : title}
          </Typography>
        </CustomLink>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: 16, color: "primary.dark" }}
          >
            ৳{salePrice}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: 12,
            }}
          >
            ৳{regularPrice}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
