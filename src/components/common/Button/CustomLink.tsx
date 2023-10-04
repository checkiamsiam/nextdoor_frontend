import { Link, NoSsr, SxProps } from "@mui/material";
import NavLink from "next/link";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
  href: string;
};

const CustomLink = ({ children, sx, href }: IProps) => {
  return (
    <NoSsr>
      <Link
        sx={{
          ...sx,
        }}
        component={NavLink}
        href={href}
      >
        {children}
      </Link>
    </NoSsr>
  );
};

export default CustomLink;
