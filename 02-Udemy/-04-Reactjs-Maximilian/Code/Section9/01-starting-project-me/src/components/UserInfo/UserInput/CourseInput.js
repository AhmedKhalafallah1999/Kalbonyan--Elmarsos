import React, { useRef } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";
const CourseInput = (props) => {
  // const [userNameData, setName] = useState();
  // const [userAgeData, setAge] = useState();
  const nameUsingRef = useRef();
  const ageUsingRef = useRef();
  const onSaveHandler = (event) => {
    event.preventDefault();
    props.userDataHandler(
      nameUsingRef.current.value,
      ageUsingRef.current.value
    );
    nameUsingRef.current.value = "";
    ageUsingRef.current.value = "";
  };
  // const userNameHandler = (e) => {
  //   // console.log("ahmed");
  //   setName(e.target.value);
  // };
  // const userAgeHandler = (e) => {
  //   // console.log("ahmed");
  //   setAge(e.target.value);
  // };
  let category = "Add User";
  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          // onChange={userNameHandler}
          ref={nameUsingRef}
        ></input>
      </div>
      <div className="form-control">
        <label>Age (Years)</label>
        <input
          type="number"
          // onChange={userAgeHandler}
          ref={ageUsingRef}
        ></input>
      </div>
      <Button type="submit" Target={category}></Button>
    </form>
  );
};
export default CourseInput;
