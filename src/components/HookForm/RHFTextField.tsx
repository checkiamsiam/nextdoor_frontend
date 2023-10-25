import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type IProps = {
  name: string;
  helperText: string | undefined;
  label: string;
};

export default function RHFTextField({ name, helperText, label, ...other }: TextFieldProps & IProps) {
  const { control } = useFormContext();

  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "text.secondary", fontWeight: 500 }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            size="small"
            value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
          />
        )}
      />
    </>
  );
}
