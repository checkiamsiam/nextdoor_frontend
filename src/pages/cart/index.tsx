import CartItems from "@/components/Cart/CartItems";
import CartOrderSummery from "@/components/Cart/CartOrderSummery";
import SEO from "@/components/common/SEO";
import { Container, Grid } from "@mui/material";

const CartPage = () => {
  return (
    <>
      <SEO title="Cart | NextDoor" />
      <Container fixed sx={{ minHeight: "100vh", pt: { xs: "90px", md: "20px" }, pb: 5 }}>
        <Grid container spacing={2} flexDirection={{ xs: "column-reverse", md: "row" }}>
          <Grid item xs={12} md={8}>
            <CartItems />
          </Grid>
          <Grid item xs={12} md={4} sx={{ position: "relative" }}>
            
            <CartOrderSummery />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CartPage;
