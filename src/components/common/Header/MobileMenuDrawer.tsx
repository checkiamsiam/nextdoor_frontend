import { categories } from "@/static/data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { MdOutlineExpandMore } from "react-icons/md";

const MobileMenuDrawer = () => {
  return (
    <Box sx={{ pt: "70px", width: "200px" }} className="scroll-thin">
      {categories.map((category, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{category?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction="column"
              gap={1}
              sx={{
                px: 1,
              }}
            >
              <Link href="/">Item One</Link>
              <Link href="/">Item One</Link>
              <Link href="/">Item One</Link>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default MobileMenuDrawer;
