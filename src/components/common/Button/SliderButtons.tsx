import { IconButton, Box } from "@mui/material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderButtonsProps {
  onClick?: () => void;
}

interface CustomDotProps {
  active?: boolean;
  onClick?: () => void;
}

export const CustomPrevArrow: React.FC<SliderButtonsProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 15,
        bottom: "50%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          bgcolor: "rgba(128, 128, 128, .5)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(128, 128, 128, .6)",
          },
        }}
      >
        <IoIosArrowBack />
      </IconButton>
    </Box>
  );
};

export const CustomNextArrow: React.FC<SliderButtonsProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 15,
        bottom: "50%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          bgcolor: "rgba(128, 128, 128, .5)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(128, 128, 128, .6)",
          },
        }}
      >
        <IoIosArrowForward />
      </IconButton>
    </Box>
  );
};

export const CustomDot: React.FC<CustomDotProps> = ({ active, onClick }) => {
  console.log(active);
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        width: 40,
        height: 12,
        bgcolor: active ? "primary.main" : "white",
      }}
    ></Box>
  );
};
