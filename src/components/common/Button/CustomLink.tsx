import { Box, Link, NoSsr, SxProps } from "@mui/material";
import NavLink from "next/link";

type IProps = {
  children: React.ReactNode | string;
  sx?: SxProps;
  href: string;
};

const CustomLink = ({ children, sx, href }: IProps) => {
  return (
    <NoSsr>
      <Box
        sx={{
          textDecoration: "none",
          ...sx,

        }}
        
        component={NavLink}
        href={href}
      >
        {children}
      </Box>
    </NoSsr>
  );
};

export default CustomLink;
