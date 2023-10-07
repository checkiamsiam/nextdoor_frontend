import { IProduct } from "@/interface/product.interface";
import { Box, Button, Card, Container, Grid, Stack } from "@mui/material";
import ProductTopInfo from "./ProductTopInfo";
import { useState } from "react";
import ProductSpecifications from "./ProductSpecifications";
import ProductDescription from "./ProductDescription";
import ProductQuestions from "./ProductQuestions";
import ProductReviews from "./ProductReviews";
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
  },
  {
    id: "reviews",
    title: "Reviews",
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
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  {navigations?.map((nav, i) => (
                    <a href={`#${nav?.id}`} key={i}>
                      <Button
                        variant="contained"
                        color={activeTab === i ? "secondary" : "primary"}
                        onClick={() => setActiveTab(i)}
                        sx={{ px: { xs: 2, md: 4 } }}
                      >
                        {nav?.title}
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
