import LeftFrame from "../leftFrame/leftFrame";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./completeSignUp.css";
const CompleteSignUp = () => {
  const DataSelector = useSelector((state) => state.PrimaryData.PrimaryData[0]);
  // console.log(DataSelector);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    phone: "",
    birthday: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  // register func
  const registerFunc = () => {
    const {
      username,
      phone,
      birthday,
      // indicates whether the form is in login mode or not
    } = formState;
    const data = {
      ...DataSelector,
      username,
      phone,
      birthday,
    };

    if (username === "" || phone === "" || birthday === "") {
      console.log("empty fields");
      return;
    } else {
      fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/login");
        })
        .catch((error) => console.log("there an error happen"));
    }
  };
  const LogInHandlerAlt = () => {
    return navigate("/login");
  };
  return (
    <div className="comleteSignUp">
      <LeftFrame />
      <div className="signUp">
        {/* <div className="form"> */}
        <h1>Complete SignUp</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <label>Birth Year</label>
            <input
              type="date"
              name="birthday"
              value={formState.birthday}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button className="completeSignUp" onClick={registerFunc}>
              Complete SignUp
            </button>
            <button className="Back">Back</button>
          </div>
          <div className="alternative">
            <p>Already have an account!</p>
            <button onClick={LogInHandlerAlt}>Login</button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};
export default CompleteSignUp;
