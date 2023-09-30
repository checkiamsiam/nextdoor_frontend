import PriceRange from "@/components/Filters/PriceRange";
import { theme } from "@/utils/theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AvailabilityFilter from "../Filters/AvailabilityFilter";
import BrandFilter from "../Filters/BrandFilter";

const SingleCategory = () => {
  const [expanded, setExpanded] = useState<string | false>("price_range");

  const handleAccordionChange =
    (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Container fixed sx={{ py: { xs: 8, md: 4 } }}>
        <Grid container>
          {/* Left Side Filters */}
          <Grid item xs={0} md={3} sx={{ display: { xs: "none", md: "grid" } }}>
            <Stack spacing={1} direction="column">
              <PriceRange id="price_range" />

              <AvailabilityFilter id="availability" />

              <BrandFilter id="brand" />
            </Stack>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={9}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleCategory;
