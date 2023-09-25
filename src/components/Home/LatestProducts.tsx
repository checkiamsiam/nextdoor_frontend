import { Container, Grid } from "@mui/material";
import SectionHeading from "../common/Home/SectionHeading";
import ProductCard from "../common/Card/ProductCard";
import latestProducts from "@/static/latestProducts";
import { IProduct } from "@/interface/product.interface";

const LatestProducts = () => {
  return (
    <Container fixed sx={{ py: 4 }}>
      <SectionHeading
        title="Latest Products"
        subtitle="Latest Trending Product on Market"
        link="/latest-products"
      />

      <Grid container spacing={1.25} sx={{ mt: 0 }}>
        {latestProducts.map((product: IProduct) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestProducts;
