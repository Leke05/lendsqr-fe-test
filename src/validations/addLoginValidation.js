import * as yup from "yup";

const passwordSchema = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[@$!%*?&]/, "Password must contain at least one special character");

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .matches(/^(?!.*@[^,]*,)/, "Email should not contain commas")
    .required("Email is required"),
  password: passwordSchema,
});
