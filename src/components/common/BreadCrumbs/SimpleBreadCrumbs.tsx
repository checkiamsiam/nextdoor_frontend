import { AiOutlineHome } from "react-icons/ai";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";
import CustomLink from "../Button/CustomLink";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

type link = {
  name: string;
  path: string;
  icon?: React.ReactNode;
};

type IProps = {
  links: link[];
};

const SimpleBreadCrumbs = ({ links }: IProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        boxShadow: 2,
        pb: 1,
        pt: { xs: 10, md: 1 },
      }}
    >
      <Container fixed>
        <Breadcrumbs sx={{ py: 0.5 }}>
          <CustomLink
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "grey.600",
              textDecoration: "none",
              gap: 1,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
              fontSize: 14,
            }}
          >
            <AiOutlineHome sx={{ mr: 0.5 }} fontSize="inherit" />
            <Typography variant="body1" sx={{ fontSize: "inherit" }}>
              Home
            </Typography>
          </CustomLink>
          {links?.map((link, i) => (
            <CustomLink
              key={link?.name}
              href={link?.path}
              sx={{
                display: "flex",
                alignItems: "center",
                color: i === links?.length - 1 ? "text.primary" : "grey.600",
                textDecoration: "none",
                gap: 1,
                cursor: "pointer",
                fontSize: 14,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {link?.icon}
              <Typography variant="body1" sx={{ fontSize: "inherit" }}>
                {link?.name}
              </Typography>
            </CustomLink>
          ))}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default SimpleBreadCrumbs;
