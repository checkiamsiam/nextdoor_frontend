import CartItems from "@/components/Checkout/CartItems";
import InformationForm from "@/components/Checkout/InformationForm";
import OrderSummery from "@/components/Checkout/OrderSummery";
import NotFoundPage from "@/components/NotFound/NotFound";
import PrimaryButton from "@/components/common/Button/PrimaryButton";
import SEO from "@/components/common/SEO";
import { Card, Container, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!["cart", "information", "confirm"].includes(slug as string)) {
    return <NotFoundPage />;
  }

  const handleProceed = () => {
    router.push("/checkout/information");
  };

  return (
    <>
      <SEO title="Cart | NextDoor" />
      <Container fixed sx={{ minHeight: "100vh", pt: { xs: "90px", md: "20px" }, pb: 5 }}>
        <Grid container spacing={2} flexDirection={{ xs: "column-reverse", md: "row" }}>
          <Grid item xs={12} md={8}>
            {slug === "cart" && <CartItems />}
            {slug === "information" && <InformationForm />}
            <Card sx={{ bgcolor: "white", p: 1, mt: 2, position: "sticky", bottom: "10px", boxShadow: 10 }}>
              <Stack spacing={1} direction="row" justifyContent="flex-end" sx={{ fontSize: "10px" }}>
                <PrimaryButton onClick={handleProceed}>Proceed to Checkout (0)</PrimaryButton>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ position: "relative" }}>
            <OrderSummery />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckoutPage;
