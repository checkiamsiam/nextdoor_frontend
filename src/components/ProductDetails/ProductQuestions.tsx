import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const ProductQuestions = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="questions">
        <Typography variant="h5" gutterBottom>
          Questions
        </Typography>

        <EmptyUI title="No questions found" />
      </Card>
    </>
  );
};

export default ProductQuestions;
