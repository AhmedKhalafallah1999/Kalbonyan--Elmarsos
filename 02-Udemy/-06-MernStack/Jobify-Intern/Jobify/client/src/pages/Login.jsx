import {
  Link,
  Form,
  useNavigation,
  redirect,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../component/index";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const Action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("login success");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data.msg);
    // toast.error("login failed");
    return error;
  }
};
const Login = () => {
  const navigateDemo = useNavigate();

  const loginUserDemo = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a look");
      navigateDemo("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data.msg);
      // toast.error("login failed");
      return error;
    }
  };
  const navigate = useNavigation();
  const isSubmitted = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow name="email" type="email"></FormRow>
        <FormRow name="password" type="password"></FormRow>
        <button type="submit" className="btn btn-block" disabled={isSubmitted}>
          {isSubmitted ? "submitting..." : "submit"}
        </button>
        <button type="button" className="btn btn-block" onClick={loginUserDemo}>
          explore the app
        </button>
        <p>
          Not a member yet!
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
