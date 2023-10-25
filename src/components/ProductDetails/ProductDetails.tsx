import { IProduct } from "@/interface/product.interface";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductQuestions from "./ProductQuestions";
import ProductReviews from "./ProductReviews";
import ProductSpecifications from "./ProductSpecifications";
import ProductTopInfo from "./ProductTopInfo";
import RelatedProducts from "./RelatedProducts";

type IProps = {
  product: IProduct;
};

const navigations = [
  {
    id: "specification",
    title: "Specification",
  },
  {
    id: "description",
    title: "Description",
  },
  {
    id: "questions",
    title: "Questions",
    count: 2,
  },
  {
    id: "reviews",
    title: "Reviews",
    count: 2,
  },
];

const ProductDetails = ({ product }: IProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Container fixed sx={{ py: { xs: 10, md: 5 } }}>
        <ProductTopInfo product={product} />
        <Box sx={{ my: 3 }}>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={8.5}>
              <Box>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  sx={{ mb: 3, gap: { xs: 0.5, md: 2 } }}
                >
                  {navigations?.map((nav, i) => (
                    <a href={`#${nav?.id}`} key={i}>
                      <Button
                        variant="contained"
                        color={activeTab === i ? "secondary" : "primary"}
                        onClick={() => setActiveTab(i)}
                        sx={{
                          px: { xs: 1, md: 4 },
                          py: { xs: 0, md: 1 },
                        }}
                      >
                        {nav?.title} {nav?.count && `(${nav?.count})`}
                      </Button>
                    </a>
                  ))}
                </Stack>
                <Stack direction="column" spacing={2}>
                  <ProductSpecifications />
                  <ProductDescription description={product?.description} />
                  <ProductQuestions />
                  <ProductReviews />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <RelatedProducts />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;
