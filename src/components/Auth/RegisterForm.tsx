import { Alert, Button, CircularProgress, Grid, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

// --------Form---------
import { SignUpSchema } from "@/schemas/Signup.yap";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import FormProvider from "../HookForm/FormProvider";
import RHFTextField from "../HookForm/RHFTextField";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const {
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleSignUp: SubmitHandler<FormData> = async (data) => {
    const { name, email, password } = data;
    setLoader(true);

    try {
      //
    } catch (error: any) {
      setError("root", {
        message: error?.response?.data?.msg,
      });
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleSignUp)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RHFTextField label="Your Full Name *" name="name" helperText={errors.name?.message} placeholder="Enter your Full name" />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField label="Your Email address *" name="email" helperText={errors.email?.message} placeholder="Enter your email address" />
          </Grid>
          <Grid item xs={12}>
            <RHFTextField
              label="Your Password *"
              name="password"
              helperText={errors.password?.message}
              placeholder="Choose a strong password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {!!errors.root && (
            <Alert
              severity="error"
              variant="standard"
              sx={{
                width: "100%",
                ml: 3,
                mt: 1.5,
                fontWeight: 600,
                color: "error.main",
              }}
            >
              {errors.root?.message || "Something went wrong"}
            </Alert>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              color="primary"
              fullWidth
              size="large"
              variant="contained"
              disabled={loader}
              startIcon={loader && <CircularProgress size="1rem" />}
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
