import { Button, ButtonProps, SxProps } from "@mui/material";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
};

const PrimaryButton = ({ children, sx , ...rest }: IProps & ButtonProps) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
