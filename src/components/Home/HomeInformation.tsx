import homeInfos from "@/static/home_info";
import { Box, Container, Typography } from "@mui/material";

const HomeInformation = () => {
  return (
    <Container fixed sx={{ py: 6 }}>
      {homeInfos.map((homeInfo, index) => (
        <Box key={index} sx={{ my: 3 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 20, md: 22 },
              color: "text.secondary",
              mb: 1.5,
            }}
          >
            {homeInfo.title}
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            {homeInfo.description}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default HomeInformation;
