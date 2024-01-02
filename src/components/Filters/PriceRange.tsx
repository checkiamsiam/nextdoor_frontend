import { FilterProps } from "@/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const PriceRange = ({ id }: FilterProps) => {
  const [price, setPrice] = useState<number[]>([0, 100000]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    setPrice(newValue as number[]);
  };

  return (
    <>
      <Accordion
        sx={{ width: "100%", bgcolor: "white", boxShadow: 0 }}
        expanded
      >
        <AccordionSummary
          sx={{
            borderBottom: `1px solid lightgrey`,
            py: 0,
            fontSize: 20,
            "&.Mui-disabled": {
              color: "text.primary",
              opacity: 1,
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "primary.main",
            },
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              color: "grey.700",
            },
          }}
          disabled
          // expandIcon={<IoIosArrowDown />}
          id={id}
        >
          <Typography sx={{ width: "100%", fontWeight: 500, flexShrink: 0 }}>
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            sx={{ my: 2 }}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
            min={0}
            max={100000}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <TextField
                label="Min"
                variant="outlined"
                defaultValue={price[0]}
                value={price[0]}
                size="small"
                onChange={(e) => setPrice([Number(e.target.value), price[1]])}
                sx={{ width: 100, py: 0, px: 0 }}
              />
              ৳
            </Box>

            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <TextField
                label="Max"
                variant="outlined"
                defaultValue={price[1]}
                value={price[1]}
                size="small"
                onChange={(e) => setPrice([price[0], Number(e.target.value)])}
                sx={{ width: 100, py: 0, px: 0 }}
              />
              ৳
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PriceRange;
