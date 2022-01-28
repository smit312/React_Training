import * as Yup from "yup";
import "yup-phone";
export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(15, "enter 15 chaeacter").required("name is required"),
  email: Yup.string().email("email is invalid").required("required"),
  phonenumber: Yup.string().phone("IN"),
  password: Yup.string().required("Password is required"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  profile: Yup.mixed()
    .nullable()
    .required("Profile picture is required")
    .test("fileSize", "image size is too much big", (value) => {
      return !value || (value !== null && value.size <= 2000000);
    })
    .test("fileType", "image type should be jpg or png only ", (value) => {
      return (
        !value ||
        (value !== null && ["image/jpg", "image/png"].includes(value.type))
      );
    }),
});
