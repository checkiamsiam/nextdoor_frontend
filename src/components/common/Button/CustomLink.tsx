import { Link, SxProps } from "@mui/material";
import NavLink from "next/link";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
  href: string;
};

const CustomLink = ({ children, sx, href }: IProps) => {
  return (
    <Link
      sx={{
        ...sx,
      }}
      component={NavLink}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
