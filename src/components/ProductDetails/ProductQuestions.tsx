import { Card, Stack, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";
import PrimaryButton from "../common/Button/PrimaryButton";

const ProductQuestions = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="questions">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ pb: 1, borderBottom: "1px solid", borderColor: "divider" }}
        >
          <Typography variant="h6">Questions</Typography>

          <PrimaryButton>Ask a question</PrimaryButton>
        </Stack>

        <EmptyUI title="There are no questions asked yet. Be the first one to ask a question." />
      </Card>
    </>
  );
};

export default ProductQuestions;
