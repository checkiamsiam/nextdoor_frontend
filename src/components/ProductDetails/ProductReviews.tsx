import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const ProductReviews = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="reviews">
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>

        <EmptyUI title="No review found" />
      </Card>
    </>
  );
};

export default ProductReviews;
