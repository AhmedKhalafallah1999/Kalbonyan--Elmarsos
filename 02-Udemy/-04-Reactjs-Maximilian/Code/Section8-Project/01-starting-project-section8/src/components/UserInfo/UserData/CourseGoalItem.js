import React, { useState } from "react";
const CourseGoalItem = (props) => {
  const [isValid, setValid] = useState(true);
  // if (props.renderNewItem[0] === "") {
  //   setValid(false);
  // }
  // setValid(true);
  let content = isValid
    ? `${props.renderNewItem[0]} ( ${props.renderNewItem[1]} ) Years Old`
    : "";
  return <li>{content}</li>;
};
export default CourseGoalItem;
