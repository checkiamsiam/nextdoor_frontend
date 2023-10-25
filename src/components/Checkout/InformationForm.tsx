import { OrderInformation } from "@/schemas/OrderInformation.yap";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "../HookForm/FormProvider";
import RHFTextField from "../HookForm/RHFTextField";



const InformationForm = () => {
  const methods = useForm({
    resolver: yupResolver(OrderInformation),
  });

  const {
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <Card sx={{ bgcolor: "white", p: 3, boxShadow: 2 }}>
      <Typography variant="subtitle1" fontWeight={500}>
        Information
      </Typography>
      <hr />

      <FormProvider methods={methods} onSubmit={handleSubmit(submitHandler)} sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <RHFTextField label="First Name *" name="firstName" helperText={errors.firstName?.message} placeholder="Enter your first name" />
          </Grid>
          <Grid item xs={6}>
            <RHFTextField label="Last Name *" name="lastName" helperText={errors.lastName?.message} placeholder="Enter your last name" />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField label="Contact Number *" name="number" helperText={errors.number?.message} placeholder="01XXXXXXXXX" />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField label="Email" name="email" helperText={errors.email?.message} placeholder="customer@next-door.com" />
          </Grid>
          <Grid item xs={6}>
            <RHFTextField label="Division *" name="division" helperText={errors.division?.message} placeholder="Enter Location Division" />
          </Grid>
          <Grid item xs={6}>
            <RHFTextField label="City / Thana *" name="city" helperText={errors.city?.message} placeholder="Enter your City / Thana" />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField
              label="Address *"
              name="address"
              helperText={errors.address?.message}
              placeholder="Enter Holding No. Road No. block/sector"
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default InformationForm;
