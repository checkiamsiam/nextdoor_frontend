import useClickOutside from "@/hooks/useClickOutside";
import {
  Backdrop,
  Box,
  Container,
  Drawer,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import HeaderMain from "./HeaderMain";
import MobileBottomMenu from "./MobileBottomMenu";
import MobileMenuDrawer from "./MobileMenuDrawer";
import SearchBar from "./SearchBar";
import SubCatBottomHeader from "./SubCatBottomHeader";

const Header = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useClickOutside(ref, handleClose);
  return (
    <header>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          position: "fixed",
          width: "100vw",
          zIndex: 99,
        }}
      >
        <Container fixed>
          <Hidden mdDown>
            <HeaderMain />
          </Hidden>
          <Hidden mdUp>
            <Stack
              sx={{ height: "70px" }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Hamburger
                size={25}
                toggled={openMobileMenu}
                onToggle={() => setOpenMobileMenu(!openMobileMenu)}
              />
              <Typography variant="h4">Logo</Typography>
              <BiSearchAlt
                onClick={handleClickOpen}
                style={{
                  fontSize: "30px",
                }}
              />
            </Stack>
          </Hidden>
        </Container>
      </Box>
      <Hidden mdDown>
        <SubCatBottomHeader />
      </Hidden>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          "&.MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.800)",
            backdropFilter: "blur(1px)",
            paddingX: "30px",
          },
        }}
        open={open}
      >
        <Box sx={{ height: "100%", width: "100%", pt: 10 }}>
          <span ref={ref}>
            <SearchBar />
          </span>
        </Box>
      </Backdrop>
      <Drawer
        anchor="left"
        open={openMobileMenu}
        sx={{
          zIndex: 98,
        }}
        onClose={() => setOpenMobileMenu(false)}
      >
        <MobileMenuDrawer />
      </Drawer>
      <Hidden mdUp>
        <Box
          sx={{
            bgcolor: "background.secondary",
            color: "white",
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 97,
          }}
        >
          <MobileBottomMenu />
        </Box>
      </Hidden>
    </header>
  );
};

export default Header;
