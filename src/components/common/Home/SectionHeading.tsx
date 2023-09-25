import { Stack, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type IProps = {
  title: string;
  subtitle?: string;
  link?: string;
};

const SectionHeading = ({ title, subtitle, link }: IProps) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ position: "relative", pl: 3, pr: 1, bgcolor: "white" }}
      >
        <Box
          sx={{
            width: 8,
            height: "100%",
            bgcolor: "primary.dark",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        <Box sx={{ py: 0.5 }}>
          <Typography variant="h3" sx={{ fontSize: 20 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: 12, lineHeight: 1 }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {link && (
          <Button
            variant="contained"
            sx={{
              fontWeight: 500,
              px: 2,
              py: 0.25,
              mt: 1.5,
              borderRadius: 10,
              color: "white",
              bgcolor: "primary.main",
            }}
            endIcon={<MdKeyboardArrowRight />}
          >
            <Link href={link}>View All</Link>
          </Button>
        )}
      </Stack>
    </>
  );
};

export default SectionHeading;
