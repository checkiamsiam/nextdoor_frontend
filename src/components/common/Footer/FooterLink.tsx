import { Typography } from "@mui/material";
import CustomLink from "../Button/CustomLink";

type IProps = {
  children: React.ReactNode | string;
  href: string;
};

const FooterLink = ({ children, href }: IProps) => {
  return (
    <Typography>
      <CustomLink
        sx={{
          fontSize: "12px",
          textDecoration: "none",
          color: "inherit",
          ":hover": {
            textDecoration: "underline",
            color: "secondary.main",
          },
        }}
        href={href}
      >
        {children}
      </CustomLink>
    </Typography>
  );
};

export default FooterLink;
