import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";
import { useState } from "react";
import latestProducts from "@/static/latestProducts";
import Image from "next/image";
import CustomLink from "../common/Button/CustomLink";

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState(
    latestProducts.slice(0, 4)
  );
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            pb: 2,
            textAlign: "center",
            color: "primary.dark",
          }}
        >
          Related Products
        </Typography>

        {!relatedProducts?.length ? (
          <EmptyUI title="No product found" />
        ) : (
          <Grid container>
            {relatedProducts?.map((product, i) => (
              <Grid item xs={12} key={i}>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                  sx={{
                    py: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Image
                    src={product?.images[0]}
                    alt={product?.title}
                    width={80}
                    height={80}
                  />
                  <Box>
                    <CustomLink
                      href={`/product/${product?.slug}`}
                      sx={{
                        color: "text.primary",
                        lineHeight: 1.2,
                        "&:hover": {
                          color: "primary.dark",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 500, fontSize: 16 }}
                      >
                        {product?.title.length > 70
                          ? product?.title.slice(0, 70) + "..."
                          : product?.title}
                      </Typography>
                    </CustomLink>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        mt: 1,
                        fontSize: 16,
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      ৳{product?.salePrice}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </>
  );
};

export default RelatedProducts;
