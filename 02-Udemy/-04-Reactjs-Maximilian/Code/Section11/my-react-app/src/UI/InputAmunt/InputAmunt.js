import "./InputAmunt.css";
import React from "react";
const InputAmunt = React.forwardRef((props, ref) => {

  // const inputNumberHandler = () => {
  //   if (props.id === "m1") {
  //     productsCardNumber[0] += +ref.current.value;
  //     console.log(ref.current.value)
  //   } else if (props.id === "m2") {
  //     productsCardNumber[1] += +ref.current.value;
  //   } else if (props.id === "m3") {
  //     productsCardNumber[2] += +ref.current.value;
  //   } else if (props.id === "m4") {
  //     productsCardNumber[3] += +ref.current.value;
  //   }
  //   productsCardNumber.forEach((item) => {
  //     total += item;
  //   });
  //   // console.log(productsCardNumber)

  //   props.WhenPressOnBtn(total, productsCardNumber);
  //   total = 0;
  // };
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        id={props.input.id}
        {...props.input}
      ></input>
    </div>
  );
});
export default InputAmunt;
