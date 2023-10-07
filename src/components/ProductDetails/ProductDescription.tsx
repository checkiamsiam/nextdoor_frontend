import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const ProductDescription = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="description">
        <Typography variant="h5" gutterBottom>
          Description
        </Typography>

        <EmptyUI title="No description found" />
      </Card>
    </>
  );
};

export default ProductDescription;
