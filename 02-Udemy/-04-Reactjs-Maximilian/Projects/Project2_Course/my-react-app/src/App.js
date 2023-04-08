import React, { useState } from "react";
import "./App.css";
import CourseInput from "./Components/CourseGoals/CousreInput/CourseInput";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";
function App() {
  const [courseGoals, updateContent] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const onDeletion = (goalId) => {
    updateContent((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  const addGoalHandler = (enteredText) => {
    updateContent((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  }
    let content = (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one</p>
    );
    if (courseGoals.length > 0) {
      content = (
        <CourseGoalList
          items={courseGoals}
          onDeleteItem={onDeletion}
        ></CourseGoalList>
      );
    }
    return (
      <div>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler}></CourseInput>
        </section>
        <section id="goals">{content}</section>
      </div>
    );
  };
export default App;
