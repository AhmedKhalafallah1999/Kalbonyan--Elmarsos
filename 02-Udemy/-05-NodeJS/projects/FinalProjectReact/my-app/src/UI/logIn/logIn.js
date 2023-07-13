// import LeftFrame from "../leftFrame/leftFrame";
import "./logIn.css";
const LogIn = () => {
  return (
    <div className="logIn">
      {/* <LeftFrame/> */}
      {/* <div className="form"> */}
      <h1>Log In</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>

        <button className="logInBtn">LogIn</button>

        <div className="alternative">
          <p>Don't have an account!</p>
          <button>Sign Up</button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};
export default LogIn;
