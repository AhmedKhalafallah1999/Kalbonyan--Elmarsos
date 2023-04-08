import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../UserData/CourseGoalItem";
const CourseGoalList = (props) => {
  return (
    <section className="users">
      <ul>
        {props.renderNewUser.map((element) => (
          <CourseGoalItem renderNewItem={element} key={element[2]}></CourseGoalItem>
        ))}
      </ul>
    </section>
  );
};
export default CourseGoalList;
