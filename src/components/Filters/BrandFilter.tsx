import { FilterProps } from "@/interface/common.interface";
import brands from "@/static/brands";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import FilterCheckBox from "./FilterCheckBox";
import { useState } from "react";

const BrandFilter = ({ id }: FilterProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, event.target.name]);
    } else {
      setSelectedBrands(
        selectedBrands.filter((brand) => brand !== event.target.name)
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
            Brands
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {brands?.slice(0, 10)?.map((brand) => (
              <Grid item xs={12} key={brand?.id}>
                <FilterCheckBox
                  label={brand?.name}
                  onChange={handleBrandChange}
                  checked={selectedBrands.includes(brand?.name)}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BrandFilter;
