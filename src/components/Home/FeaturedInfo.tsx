import { Box, Container, Grid, Typography } from "@mui/material";
import CustomImage from "../common/Image/CustomImage";
import { featuredInfos } from "@/static/featuredInfo";

const FeaturedInfo = () => {
  return (
    <Container fixed sx={{ py: 2 }}>
      <Grid container spacing={2}>
        {featuredInfos?.map((info, i) => (
          <Grid item xs={6} md={3} key={i}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 1,
                bgcolor: "white",
                p: 2,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: { xs: 1, md: 2 },
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: 10,
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  p: { xs: 0.5, md: 1 },
                }}
              >
                <CustomImage src={info.icon} alt={info.title} ratio="24/24" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: 14, md: 20 },
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 12,
                    color: "text.secondary",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {info.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedInfo;
