
import { IProduct } from "@/types/ApiResponse";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../common/Card/ProductCard";

type IProps = {
  products: IProduct[];
};

const LatestProducts = ({ products }: IProps) => {
  // const { data, isLoading } = useGetProductsQuery(
  //   {},
  //   {
  //     skip: dataLoaded,
  //   }
  // )

  return (
    <Container fixed sx={{ py: 6 }}>
      {/* <SectionHeading
        title="Latest Products"
        subtitle="Latest Trending Product on Market"
        link="/latest-products"
      /> */}

      <Typography variant="h4" sx={{ fontSize: 20, textAlign: "center" }}>
        Latest Products
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Hottest items flying off the shelves
      </Typography>

      <Grid container spacing={1.5} sx={{ mt: 0 }}>
        {products.map((product: IProduct) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestProducts;
