// import LeftFrame from "../leftFrame/leftFrame";
import './completeSignUp.css'
const CompleteSignUp = () => {
  return (
    <div className="signUp">
      {/* <LeftFrame/> */}
      {/* <div className="form"> */}
      <h1>Complete SignUp</h1>
      <form>
        <div>
          <label>Username</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Phone</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Birth Year</label>
          <input type="text"></input>
        </div>
        <div>
        <button className="completeSignUp">Complete SignUp</button>
        <button className="Back">Back</button>
        </div>
        <div className="alternative">
        <p>Already have an account!</p>
        <button>Login</button>
        </div>
      </form>
    {/* </div> */}
    </div>
  );
};
export default CompleteSignUp;