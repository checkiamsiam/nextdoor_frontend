import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type IProps = {
  title: string;
};

const TopFilter = ({ title = "Title" }: IProps) => {
  const [sortBy, setSortBy] = useState("default");
  const [show, setShow] = useState("20");

  const handleSortByChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handleShowChange = (event: SelectChangeEvent) => {
    setShow(event.target.value);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        spacing={2}
        sx={{
          bgcolor: "white",
          py: 1,
          px: 2,
          maxWidth: "100%",
          boxShadow: "1px 1px 5px lightgray",
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: 15, fontWeight: 600 }}>
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Sort By</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={sortBy}
              label="Sort By"
              onChange={handleSortByChange}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="name_asc">Name (A - Z)</MenuItem>
              <MenuItem value="name_desc">Name (Z - A)</MenuItem>
              <MenuItem value="price_asc">Price (Low - High)</MenuItem>
              <MenuItem value="price_desc">Price (High - Low)</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Show</InputLabel>
            <Select value={show} label="Show" onChange={handleShowChange}>
              <MenuItem value={"20"}>20</MenuItem>
              <MenuItem value={"50"}>50</MenuItem>
              <MenuItem value={"100"}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
};

export default TopFilter;
