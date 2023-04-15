import React, { useRef } from "react";
import InputAmunt from "../../../UI/InputAmunt/InputAmunt";
import "./MealItemForm.css";
let productsCardNumber = [0, 0, 0, 0];
// let numberOfProducts = 0;
let numberOfProductss = 0;
// let products;
const MealItemForm = (props) => {
  const ahmed = useRef();
  // const AddHandlerValue = (number, productArray) => {
  //   numberOfProducts = +number;
  //   products = productArray;
  // };
  const addToCartHandler = () => {
    numberOfProductss += +ahmed.current.value;
    if (props.id === "m1") {
      productsCardNumber[0] += +ahmed.current.value;
      // console.log(ref.current.value)
    } else if (props.id === "m2") {
      productsCardNumber[1] += +ahmed.current.value;
    } else if (props.id === "m3") {
      productsCardNumber[2] += +ahmed.current.value;
    } else if (props.id === "m4") {
      productsCardNumber[3] += +ahmed.current.value;
    }

    console.log(productsCardNumber);
    props.numberWillAddedToCard(numberOfProductss, productsCardNumber);
    // console.log(ahmed.current.value);
  };
  return (
    <div className="form">
      <InputAmunt
        ref={ahmed}
        // WhenPressOnBtn={AddHandlerValue}
        label="Amount"
        id={props.id}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      ></InputAmunt>
      <button onClick={addToCartHandler}>+ Add</button>
    </div>
  );
};
export default MealItemForm;
