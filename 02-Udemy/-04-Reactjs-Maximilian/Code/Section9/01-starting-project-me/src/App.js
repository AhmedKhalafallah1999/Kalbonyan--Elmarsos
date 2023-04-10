import React, { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/UserInfo/UsersData/CourseGoalList";
import CourseInput from "./components/UserInfo/UserInput/CourseInput";
import Error from "./components/UserInfo/ErrorHandling/Error";
const App = () => {
  const [error, setError] = useState(false);
  const [text, setText] = useState();
  // const onClickHandler = (event) => {
  //   setError(false);
  // };
  const [UserData, setData] = useState([]);
  const onSave = (one, two) => {
    if (one && two && +two > 0) {
      setData((prevUsers) => {
        const updatedGoals = [...prevUsers];
        updatedGoals.unshift([one, two, Math.random().toString()]);
        return updatedGoals;
      });
    } else if (+two < 0) {
      setText("Please enter a valid age (>0).");
      setError(true);
    } else {
      setText("Please enter a valid name age (non-empty values).");
      setError(true);
    }
  };

  return (
    [
      error ? <Error on={setError} content={text} key="error"></Error> : "",
      
        <div id="user-form" className="special" key="one">
          <CourseInput userDataHandler={onSave}></CourseInput>
        </div>,
        <div id="user-form" key='two'>
          {UserData.length > 0 ? (
            <CourseGoalList renderNewUser={UserData}></CourseGoalList>
          ) : (
            " "
          )}
        </div>
      
    ]
    
  );
};

export default App;
