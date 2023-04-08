import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";
const CourseInput = (props) => {
  const [userNameData, setName] = useState();
  const [userAgeData, setAge] = useState();
  const onSaveHandler = (event) => {
    event.preventDefault();
    // console.log("ahmed");
      props.userDataHandler(userNameData, userAgeData);
    
  };
  const userNameHandler = (e) => {
    // console.log("ahmed");
    setName(e.target.value);
  };
  const userAgeHandler = (e) => {
    // console.log("ahmed");
    setAge(e.target.value);
  };
  let category = "Add User";
  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" onChange={userNameHandler}></input>
      </div>
      <div className="form-control">
        <label>Age (Years)</label>
        <input type="number" onChange={userAgeHandler}></input>
      </div>
      <Button type="submit" Target={category}></Button>
    </form>
  );
};
export default CourseInput;
