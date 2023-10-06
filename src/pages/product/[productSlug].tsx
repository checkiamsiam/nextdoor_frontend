import ProductDetails from "@/components/ProductDetails/ProductDetails";
import SEO from "@/components/common/SEO";
import latestProducts from "@/static/latestProducts";
import { Box, Typography, capitalize } from "@mui/material";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const productSlug = useRouter().query.productSlug as string;

  const product = latestProducts.find(
    (product) => product.slug === productSlug
  );

  return (
    <>
      <SEO
        title={capitalize(
          product?.title + " | NextDoor" || "Product Not Found"
        )}
        description={product?.description}
        ogImage={product?.images[0]}
        ogTitle={product?.title}
      />
      {!product ? (
        <Box sx={{ height: 500, display: "grid", placeContent: "center" }}>
          <Typography variant="h3" align="center" color="error">
            Product Not Found
          </Typography>
        </Box>
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  );
};

export default ProductDetailsPage;
