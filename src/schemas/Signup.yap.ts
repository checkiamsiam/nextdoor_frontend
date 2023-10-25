import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email must be a valid email address"),
  password: Yup.string().required("Password is required").min(8),
});
