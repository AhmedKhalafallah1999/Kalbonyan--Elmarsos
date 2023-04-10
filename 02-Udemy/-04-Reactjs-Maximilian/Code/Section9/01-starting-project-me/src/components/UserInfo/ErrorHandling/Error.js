import Button from "../../UI/Button/Button";
import "./Error.css";
import React from "react";
const Error = (props) => {
  const turnOffError = (e) => {
    if (e.target.className === "backdrop") props.on(false);
  };
  const turnOffErrorByBtn = () => {
    console.log("ahmed");
    props.on(false);
  };
  console.log(props.content);
  let category = "Okay";
  return (
    <div className="backdrop" onClick={turnOffError}>
      <div className="modal">
        <div className="header">
          <h2>Invalid input</h2>
        </div>
        <p className="content">{props.content}</p>
        <div onClick={turnOffErrorByBtn} className="actions special">
          <Button Target={category}></Button>
        </div>
      </div>
    </div>
  );
};
export default Error;
