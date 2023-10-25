import { Checkbox, FormControlLabel } from "@mui/material";

type IPrps = {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterCheckBox = ({ label, checked, onChange }: IPrps) => {
  return (
    <>
      <FormControlLabel
        sx={{
          width: "100%",
          "&:hover": {
            bgcolor: "grey.200",
          },
        }}
        control={
          <Checkbox
            size="small"
            sx={{ py: 0.5 }}
            checked={checked}
            name={label}
            onChange={onChange}
          />
        }
        label={label || "No label"}
      />
    </>
  );
};

export default FilterCheckBox;
