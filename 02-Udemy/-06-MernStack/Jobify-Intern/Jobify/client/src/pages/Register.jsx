import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../component/index";
import customFetch from "../utils/customFetch.js";
// for importing the toast component to use
import { toast } from "react-toastify";
// creating a custom action to load into the main routes registartion
export const Action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("registration successfully");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    toast.error("registartion faild");
    return error;
  }
};
const Register = () => {
  const navigate = useNavigation();
  console.log(navigate);
  const isSubmitted = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block" disabled={isSubmitted}>
          {isSubmitted ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
