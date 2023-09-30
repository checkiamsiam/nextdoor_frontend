import PriceRange from "@/components/Filters/PriceRange";
import { IProduct } from "@/interface/product.interface";
import latestProducts from "@/static/latestProducts";
import { Container, Grid, Stack } from "@mui/material";
import AvailabilityFilter from "../Filters/AvailabilityFilter";
import BrandFilter from "../Filters/BrandFilter";
import TopFilter from "../Filters/TopFilter";
import ProductCard from "../common/Card/ProductCard";

type IProps = {
  category:
    | {
        id: number;
        name: string;
        slug: string;
        icon: string;
      }
    | undefined;
};

const SingleCategory = ({ category }: IProps) => {
  return (
    <>
      <Container fixed sx={{ py: { xs: 8, md: 4 } }}>
        <Grid container spacing={2}>
          {/* Left Side Filters */}
          <Grid item xs={0} md={3}>
            <Stack
              spacing={1}
              direction="column"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <PriceRange id="price_range" />

              <AvailabilityFilter id="availability" />

              <BrandFilter id="brand" />
            </Stack>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={9}>
            <TopFilter title={category?.name || ""} />

            <Grid container spacing={1.25} sx={{ mt: 1 }}>
              {latestProducts.map((product: IProduct) => (
                <Grid item xs={6} sm={4} lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleCategory;
