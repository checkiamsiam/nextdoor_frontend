import { categories } from "@/static/data";
import latestProducts from "@/static/latestProducts";
import { Box, Card, ClickAwayListener, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyleComponents";

const SearchBar = () => {
  const [value, setValue] = useState("one");

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
              overflowY: "auto",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
                <Tab value="one" label="Products" />
                <Tab value="two" label="Categories" />
              </Tabs>

              {value === "one" && (
                <Stack>
                  <Box
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Image src={latestProducts[0].images[0]} alt="product" width="40" height="40" style={{ borderRadius: "5px" }} />
                      <Box>
                        <Typography fontSize="14px">{latestProducts[0].title}</Typography>
                        <Typography color="secondary.dark" fontSize="14px">
                          {latestProducts[0].salePrice} ৳
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              )}

              {value === "two" && (
                <Stack>
                  <Box
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Image src={categories[0].icon} alt="product" width="40" height="40" style={{ borderRadius: "5px" , filter: "grayscale(100%)"}} />
                      <Box>
                        <Typography fontSize="14px">{categories[0].name}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              )}
            </Box>
          </Card>
        )}
      </Search>
    </ClickAwayListener>
  );
};

export default SearchBar;
