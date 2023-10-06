import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { useState } from "react";

// --------Form---------
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
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

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required").min(8),
  });

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
            {/* label */}
            <InputLabel
              htmlFor="name"
              sx={{ mb: 1, color: "text.secondary", fontWeight: 500 }}
            >
              Your Full Name *
            </InputLabel>
            <RHFTextField
              name="name"
              helperText={errors.name?.message}
              placeholder="Enter your Full name"
            />
          </Grid>
          <Grid item xs={12}>
            {/* label */}
            <InputLabel
              htmlFor="email"
              sx={{ mb: 1, color: "text.secondary", fontWeight: 500 }}
            >
              Your Email address *
            </InputLabel>
            <RHFTextField
              name="email"
              helperText={errors.email?.message}
              placeholder="Enter your email address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor="password"
              sx={{ mb: 1, color: "text.secondary", fontWeight: 500 }}
            >
              Your Password *
            </InputLabel>
            <RHFTextField
              name="password"
              helperText={errors.password?.message}
              placeholder="Choose a strong password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
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
