import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const ProductSpecifications = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="specification">
        <Typography variant="h5" gutterBottom>
          Specifications
        </Typography>

        <EmptyUI title="No specification found" />
      </Card>
    </>
  );
};

export default ProductSpecifications;
