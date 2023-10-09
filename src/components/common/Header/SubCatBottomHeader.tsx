import { Box, Container, Stack, Typography } from "@mui/material";
import { categories } from "../../../static/data";

const SubCatBottomHeader = () => {
  return (
    <Box bgcolor="white">
      <Container fixed sx={{ paddingTop: "70px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingY: "5px",
            //select last theree child
            "& > *:nth-last-child(-n+3)": {
              //select subC class inside last three child
              "& .subCategory": {
                left: "auto",
                right: 0,
              },
            },
          }}
        >
          {categories.map((category, i) => {
            return (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  ":hover": {
                    "& .subCategory": {
                      display: "block",
                      opacity: 1,
                      visibility: "visible",
                    },
                  },
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ cursor: "pointer", fontSize: 14 }}>
                  {category.name}
                </Typography>
                <Box
                  className="subCategory"
                  sx={{
                    position: "absolute",
                    width: "150px",
                    top: "102%",
                    opacity: 0,
                    visibility: "hidden",
                    backgroundColor: "white",
                    zIndex: 10,
                    borderTop: "2px solid",
                    borderColor: "secondary.main",
                    boxShadow: 5,
                    transition: "all 0.3s linear",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  <Stack spacing={1}>
                    {["lama", "kama", "nama", "lama", "kama", "nama"].map((subCategory, i) => {
                      return (
                        <Typography
                          key={i}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            cursor: "pointer",
                            fontSize: 14,
                            paddingY: "5px",
                            paddingX: "10px",
                            transition: "all 0.1s ease-in-out",
                            ":hover": {
                              backgroundColor: "secondary.main",
                              borderRadius: "5px",
                            },
                          }}
                        >
                          Item One
                        </Typography>
                      );
                    })}
                  </Stack>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default SubCatBottomHeader;
