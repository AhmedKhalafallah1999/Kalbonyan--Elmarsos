import InputAmunt from "../../../UI/InputAmunt/InputAmunt";
import { useRef, useState } from "react";
import "./MealItemForm.css";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountValid] = useState(true);
  const inputAmountRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    } else {
      props.onAddToCart(enteredAmountNumber);
      setAmountValid(true);
    }
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <InputAmunt
        ref={inputAmountRef}
        label="Amount"
        id={props.id}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></InputAmunt>
      <button>+ Add</button>
      {!amountIsValid ? <p>Pleae Enter a Valid amount(1-5) </p> : ""}
    </form>
  );
};
export default MealItemForm;
