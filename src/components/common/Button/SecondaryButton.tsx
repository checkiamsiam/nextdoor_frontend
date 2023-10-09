import { Button, ButtonProps, SxProps } from "@mui/material";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
};

const SecondaryButton = ({ children, sx, ...rest }: IProps & ButtonProps) => {
  return (
    <>
      <Button
        variant="text"
        color="primary"
        sx={{
          outline: "1px solid",
          bgcolor: "primary.lighter",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
          },
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};

export default SecondaryButton;
