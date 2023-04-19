import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggle());
  };
  const increamentHandler = () => {
    dispatch(counterActions.increament());
    // dispatch({ type: "increament" });
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
    // dispatch({ type: "decreament" });
  };
  const IncreaseByFive = () => {
    // dispatch({ type: "IncreaseByFive" ,amount:5});
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={IncreaseByFive}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
