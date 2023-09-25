import { Box, Container, Grid, InputBase, Typography, alpha, styled } from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  return (
    <Box sx={{ bgcolor: "background.secondary", color: "white" }}>
      <Container fixed>
        <Grid container sx={{ height: "70px" }} direction="row" justifyContent="space-between" alignItems="center">
          <Grid item md={1}>
            <Typography variant="h4">Logo</Typography>
          </Grid>
          <Grid item md={4}>
            <Search>
              <SearchIconWrapper>
                <BiSearchAlt />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h4">Logo</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h4">Logo</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h4">Logo</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
