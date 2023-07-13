// import LeftFrame from "../leftFrame/leftFrame";
import './signUp.css'
const SignUp = () => {
  return (
    <div className="signUp">
      {/* <LeftFrame/> */}
      {/* <div className="form"> */}
      <h1>SignUp</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password"></input>
        </div>
        <button className="completeSignUp">Complete SignUp</button>
        <div className="alternative">

        <p>Already have an account</p>
        <button>Login</button>
        </div>
      </form>
    {/* </div> */}
    </div>
  );
};
export default SignUp;