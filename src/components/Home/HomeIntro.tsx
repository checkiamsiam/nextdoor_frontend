import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const introText = `Welcome to NextDoor, your go-to destination for all your electronic needs. We offer a quick and efficient shopping experience. Whether you're seeking to upgrade your home, stay connected on the go, or enhance your workspace, you can confidently order online. We ensure top-quality electronics by sourcing from trusted global suppliers. Our competitive pricing means you get quality at the best rates. Contact us for a fast and seamless order process.
\n\n
Order with confidence, and enjoy our convenient home delivery and nationwide courier service. Explore our website for detailed product information. For inquiries and updates, contact us via WhatsApp, Messenger, or call at 0123456789.`;

const HomeIntro = () => {
  const [fullText, setFullText] = useState<boolean>(false);
  const pallette = useTheme().palette;
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.3)), url(/images/electronic_bg.jpg) no-repeat center center",
          backgroundSize: "cover",
          height: 300,
          display: "grid",
          placeItems: "center",
          my: 10,
          mb: fullText ? 20 : 10,
          transition: "all 0.2s ease",
        }}
      >
        <Container
          fixed
          sx={{
            my: 13,
            p: 4,
            bgcolor: "white",
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <Stack
            direction={fullText ? "column" : "row"}
            alignItems="center"
            spacing={0.75}
          >
            {/* introText with line break */}
            <Typography
              component="h4"
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {fullText ? introText : introText.slice(0, 100) + "..."}
            </Typography>

            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
                color: pallette.primary.main,
                fontSize: 20,
              }}
              onClick={() => setFullText(!fullText)}
            >
              {fullText ? "Read Less" : "Read More"}
            </button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HomeIntro;
