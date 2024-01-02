import { FilterProps } from "@/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterCheckBox from "./FilterCheckBox";

const AvailabilityFilter = ({ id }: FilterProps) => {
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setSelectedAvailability([...selectedAvailability, event.target.name]);
    } else {
      setSelectedAvailability(
        selectedAvailability.filter(
          (availability) => availability !== event.target.name
        )
      );
    }
  };

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
              <FilterCheckBox
                label="In Stock"
                checked={selectedAvailability.includes("In Stock")}
                onChange={handleAvailabilityChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FilterCheckBox
                label="Out of Stock"
                checked={selectedAvailability.includes("Out of Stock")}
                onChange={handleAvailabilityChange}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AvailabilityFilter;
