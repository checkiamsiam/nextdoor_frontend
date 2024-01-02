// import { IProduct } from "@/interface/product.interface";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import CustomLink from "../Button/CustomLink";
import CustomImage from "../Image/CustomImage";
import { IProduct } from "@/types/ApiResponse";

type IProps = {
  product: IProduct;
};

const ProductCard = ({ product }: IProps) => {
  const router = useRouter();
  const { title, regularPrice, id, thumbnail, salePrice, category } = product;
  return (
    <Box
      sx={{
        borderRadius: 1,
        boxShadow: 1,
        bgcolor: "white",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 10px 20px #a6d5f575",
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
            bgcolor: "secondary.light",
            color: "white",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 400, fontSize: 12 }}>
            Save: $500
          </Typography>
        </Box>

        <CustomImage
          src={thumbnail}
          alt={title}
          ratio="200/180"
          sx={{
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
          onClick={() => router.push(`/product/${id}`)}
        />
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
          href={`/product/${id}`}
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

        <Box>
          {/* Prices */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
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

          {/* Rating */}
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="flex-start"
            spacing={0.5}
          >
            <Rating
              size="small"
              value={4.5}
              precision={0.5}
              readOnly
              sx={{ "& svg": { width: 14, height: 14 } }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "grey.600",
                fontSize: 12,
                lineHeight: 1.2,
              }}
            >
              ({50})
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
