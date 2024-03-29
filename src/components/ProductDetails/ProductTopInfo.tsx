import { IProduct } from "@/interface/product.interface";
import {
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PrimaryButton from "../common/Button/PrimaryButton";
import SecondaryButton from "../common/Button/SecondaryButton";
import CustomImage from "../common/Image/CustomImage";
import ProductImageGallery from "../common/ImageGallery/ProductImageGallery";

type IProps = {
  product: IProduct;
};

const ProductTopInfo = ({ product }: IProps) => {
  const { title, regularPrice, id, images, salePrice, slug, category, rating } =
    product || {};
  const [imgIndex, setImgIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [galleryView, setGalleryView] = useState<boolean>(false);
  const slides = [];

  for (const image of images) {
    slides.push({ src: image });
  }

  const keyFeatures = [
    "Mode: 4K",
    "Refresh Rate: 60Hz",
    "Screen Size: 55'",
    "Smart TV: Yes",
    "Warranty: 1 Year",
  ];

  return (
    <>
      <Box sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 4, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* <Fade in={imgIndex !== -1} timeout={500}> */}

            <CustomImage
              src={images[imgIndex]}
              alt={title}
              ratio="300/300"
              blurDataURL={images[imgIndex]}
              sx={{
                aspectRatio: "300/300",
                position: "relative",
                cursor: "zoom-in",
                "& img": {
                  borderRadius: 2,
                },
              }}
              onClick={() => setGalleryView(true)}
            />
            {/* </Fade> */}

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              {images.map((image, i) => (
                <CustomImage
                  key={i}
                  src={image}
                  alt={title}
                  ratio="60/60"
                  sx={{
                    height: 60,
                    width: 60,
                    border: "2px solid",
                    borderColor: imgIndex === i ? "primary.dark" : "grey.300",
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => setImgIndex(i)}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            {/* Title and some quick information */}
            <Box>
              <Typography
                variant="h1"
                sx={{ fontSize: 28, fontWeight: 600, color: "primary.dark" }}
              >
                {title}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                sx={{ mt: 2, gap: 1.5 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 25,
                    fontWeight: 800,
                    borderRadius: 10,
                    color: "secondary.main",
                  }}
                >
                  ৳{salePrice}
                </Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      bgcolor: "primary.lighter",
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 10,
                    }}
                  >
                    Regular Price: <strong>৳{regularPrice}</strong>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      bgcolor: "primary.lighter",
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 10,
                    }}
                  >
                    Status: <strong>In Stock</strong>
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Key Features */}
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h4"
                sx={{ fontSize: 18, fontWeight: 600, color: "text.secondary" }}
              >
                Key Features
              </Typography>

              <Stack direction="column" spacing={1} sx={{ mt: 1 }}>
                {keyFeatures?.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* Actions */}
            <Box sx={{ mt: 4 }}>
              {/* product count, increase/decrease */}
              <Box sx={{ maxWidth: "80px" }}>
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
                        onClick={() =>
                          count < 10 ? setCount(count + 1) : null
                        }
                      >
                        <AiOutlinePlus />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <PrimaryButton
                  variant="contained"
                  color="primary"
                  sx={{ px: 3 }}
                >
                  Buy Now
                </PrimaryButton>

                <SecondaryButton color="primary" sx={{ px: 2 }}>
                  Add to Cart
                </SecondaryButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ProductImageGallery
        open={galleryView}
        setOpen={setGalleryView}
        images={slides}
      />
    </>
  );
};

export default ProductTopInfo;
