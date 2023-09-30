import { FilterProps } from "@/interface/common.interface";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const AvailabilityFilter = ({ id }: FilterProps) => {
  return (
    <>
      <Accordion
        sx={{
          width: "100%",
          bgcolor: "white",
          boxShadow: 0,
        }}
        disableGutters
        defaultExpanded
      >
        <AccordionSummary
          sx={{
            borderBottom: `1px solid lightgrey`,
            py: 0,
            fontSize: 20,
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "primary.main",
            },
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              color: "grey.700",
            },
          }}
          expandIcon={<IoIosArrowDown />}
          id={id}
        >
          <Typography sx={{ width: "100%", fontWeight: 500, flexShrink: 0 }}>
            Availability
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="In Stock" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="Out Of Stock" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AvailabilityFilter;
