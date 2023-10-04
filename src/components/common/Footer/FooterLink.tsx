import { SxProps, Typography } from "@mui/material";
import CustomLink from "../Button/CustomLink";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
  href: string;
};

const FooterLink = ({ children }: IProps) => {
  return (
    <Typography>
      <CustomLink
        sx={{
          fontSize: "12px",
          textDecoration: "none",
          color: "inherit",
          ":hover": {
            textDecoration: "underline",
          },
        }}
        href="/"
      >
        {children}
      </CustomLink>
    </Typography>
  );
};

export default FooterLink;
