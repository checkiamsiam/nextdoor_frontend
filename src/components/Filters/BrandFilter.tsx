import { FilterProps } from "@/interface/common.interface";
import brands from "@/static/brands";
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

const BrandFilter = ({ id }: FilterProps) => {
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
            Brands
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {brands?.slice(0, 10)?.map((brand) => (
              <Grid item xs={12} key={brand?.id}>
                <FormControlLabel control={<Checkbox />} label={brand?.name} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BrandFilter;
