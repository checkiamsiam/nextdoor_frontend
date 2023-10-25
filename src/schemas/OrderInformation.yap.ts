import * as Yup from "yup";

export const OrderInformation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Email must be a valid email address"),
  number: Yup.string().required("Phone is required"),
  division: Yup.string().required("Division is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
});
