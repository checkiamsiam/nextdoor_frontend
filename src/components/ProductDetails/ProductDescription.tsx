import { Card, Typography } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

type IProps = {
  description: string;
};

const ProductDescription = ({ description }: IProps) => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="description">
        <Typography variant="h6" sx={{ mb: 3 }}>
          Description
        </Typography>

        {description ? (
          <Typography variant="body1">{description}</Typography>
        ) : (
          <EmptyUI title="No description found" />
        )}
      </Card>
    </>
  );
};

export default ProductDescription;
