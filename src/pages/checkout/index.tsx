import CheckoutSteps from "@/components/Checkout/CheckoutSteps";
import SEO from "@/components/common/SEO";
import { Container } from "@mui/material";

const CheckoutPage = () => {
  return (
    <>
      <SEO title="Checkout | NextDoor" />
      <Container fixed sx={{ minHeight: "100vh", pt: { xs: "90px", md: "20px" }, pb: 5 }}>
        <CheckoutSteps />
      </Container>
    </>
  );
};

export default CheckoutPage;
