import { Box, Card, ClickAwayListener, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyleComponents";

const SearchBar = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (search !== "") {
      handleOpen();
    }
  }, [search]);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Search>
        <SearchIconWrapper>
          <BiSearchAlt style={{ fontSize: "20px" }} />
        </SearchIconWrapper>
        <StyledInputBase onChange={(e) => setSearch(e.target.value)} placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        {open && (
          <Card
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              height: "400px",
              bgcolor: "white",
              color: "text.primary",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
                <Tab value="one" label="Products" />
                <Tab value="two" label="Categories" />
              </Tabs>

             
              
            </Box>
          </Card>
        )}
      </Search>
    </ClickAwayListener>
  );
};

export default SearchBar;
