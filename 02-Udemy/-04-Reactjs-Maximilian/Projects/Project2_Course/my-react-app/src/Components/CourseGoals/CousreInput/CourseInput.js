import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

export default function CourseInput(props) {
  const goalInputChangeHandler = (event) => {
    if (event.target.value === 0) {
      checkCase(false);
    } else {
      checkCase(true);
    }
    setEnteredValue(event.target.value);
  };
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, checkCase] = useState(true);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            color: !isValid ? "red" : "black",
            backgroundColor: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
