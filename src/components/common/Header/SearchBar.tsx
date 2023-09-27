import { Box, Card, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyleComponents";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Search>
        <SearchIconWrapper>
          <BiSearchAlt style={{ fontSize: "20px" }} />
        </SearchIconWrapper>
        <StyledInputBase onFocus={handleOpen} placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        {open && (
          <Card
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              height: "300px",
              bgcolor: "white",
              color: "text.primary",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          >
            <Box sx={{ p: 2 }}>
              <p>Search Suggestions</p>
            </Box>
          </Card>
        )}
      </Search>
    </ClickAwayListener>
  );
};

export default SearchBar;
