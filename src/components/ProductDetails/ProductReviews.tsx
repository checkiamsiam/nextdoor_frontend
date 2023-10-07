import { Card, Stack, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";
import PrimaryButton from "../common/Button/PrimaryButton";

const ProductReviews = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="reviews">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ pb: 1, borderBottom: "1px solid", borderColor: "divider" }}
        >
          <Typography variant="h6">Reviews</Typography>

          <PrimaryButton>Write a Review</PrimaryButton>
        </Stack>

        <EmptyUI title="This product has no reviews yet. Be the first one to write a review." />
      </Card>
    </>
  );
};

export default ProductReviews;
