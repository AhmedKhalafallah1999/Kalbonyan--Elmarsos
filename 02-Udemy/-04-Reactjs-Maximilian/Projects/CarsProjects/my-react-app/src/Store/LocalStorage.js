import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./Store";
export const LocalStorage = () => {
  const carsData = useSelector((state) => state.carsData.Data);
  const counterDispatch = useDispatch();
  // display DATA
  // window.onload = function () {
  //   displayData();
  // };
  // function displayData() {
  const counter = JSON.parse(localStorage.getItem("counter"));
  counterDispatch(counterActions.initilize(counter));
  // const inProgressContent = JSON.parse(localStorage.getItem("inProgress"));
  // const completeContent = JSON.parse(localStorage.getItem("completed"));
  // }
  // const shownState = useSelector((state) => state.shownCard.case);
  console.log(carsData);
};
// export default LocalStorage;
