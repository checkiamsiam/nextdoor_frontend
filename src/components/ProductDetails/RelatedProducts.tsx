import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const RelatedProducts = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Related Products
        </Typography>

        <EmptyUI title="No product found" />
      </Card>
    </>
  );
};

export default RelatedProducts;
