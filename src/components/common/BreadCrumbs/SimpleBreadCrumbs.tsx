import { AiOutlineHome } from "react-icons/ai";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";

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
    <Box sx={{ width: "100%", bgcolor: "white", boxShadow: 1, py: 2 }}>
      <Container fixed>
        <Breadcrumbs sx={{ py: 0.5 }}>
          <Box
            component={Link}
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
          </Box>
          {links?.map((link, i) => (
            <Box
              key={link?.name}
              component={Link}
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
            </Box>
          ))}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default SimpleBreadCrumbs;
