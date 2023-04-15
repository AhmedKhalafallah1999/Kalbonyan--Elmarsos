import "./InputAmunt.css";
import React from "react";

const InputAmunt = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} ref={ref} {...props.input}></input>
    </div>
  );
});
export default InputAmunt;
