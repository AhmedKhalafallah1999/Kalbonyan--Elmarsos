import React, { useState } from "react";
import Wrapper from "../../Wrapper/Wrapper";
const CourseGoalItem = (props) => {
  const [isValid, setValid] = useState(true);

  // if (props.renderNewItem[0] === "") {
  //   setValid(false);
  // }
  // setValid(true);
  let content = isValid
    ? `${props.renderNewItem[0]} ( ${props.renderNewItem[1]} ) Years Old`
    : "";
  return (
    <Wrapper>
      <li>{content}</li>
      {/* <li>{content}</li> */}
    </Wrapper>
  );
};
export default CourseGoalItem;
