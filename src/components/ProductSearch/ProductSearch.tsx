import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import TopFilter from "../Filters/TopFilter";
import latestProducts from "@/static/latestProducts";
import { IProduct } from "@/interface/product.interface";
import ProductCard from "../common/Card/ProductCard";

const ProductSearch = () => {
  const router = useRouter();
  const search = (router?.query?.search as string) || "";
  return (
    <>
      <Container fixed sx={{ py: 2, minHeight: "100vh" }}>
        <TopFilter title={"Search - " + search || ""} />

        <Grid container spacing={1.25} sx={{ mt: 1 }}>
          {latestProducts.map((product: IProduct) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductSearch;
