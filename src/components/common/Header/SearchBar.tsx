import { BiSearchAlt } from "react-icons/bi";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyleComponents";

const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <BiSearchAlt style={{ fontSize: "20px" }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
    </Search>
  );
};

export default SearchBar;
