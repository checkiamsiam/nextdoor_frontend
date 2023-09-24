import { Button, SxProps } from "@mui/material";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
};

const PrimaryButton = ({ children, sx }: IProps) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          ...sx,
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
