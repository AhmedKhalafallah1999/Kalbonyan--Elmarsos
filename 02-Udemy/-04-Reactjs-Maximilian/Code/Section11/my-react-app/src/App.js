import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Meals from "./Meals/Meals";
import Modal from "./Cart/Modal";
function App() {
  const [stateModel, setStateModel] = useState(false);
  const [finalArray, setFinalArray] = useState([]);
  const [finaltheArray, setFinaltheArray] = useState([]);
  const modelHander = (state) => {
    setStateModel(true);
  };
  const closeHandler = (state) => {
    setStateModel(state);
  };
  const [FinalNumber, setFinalNumber] = useState("0");
  const numberOfProductsHandler = (number) => {
    setFinalNumber(number);
  };
  const finalProductsPrice = (array) => {
    setFinalArray(array);
  };
  const finalArraysHandler = (a)=>{
    setFinaltheArray(a);
  }
  return (
    <React.Fragment>
      <Header n={FinalNumber} toShowModel={modelHander}></Header>
      <Meals
        numberOfProducts={numberOfProductsHandler}
        finalProductsPrice={finalProductsPrice}
        finalTwoArrays={finalArraysHandler}
      ></Meals>
      {stateModel ? (
        <Modal onCloseHandler={closeHandler} output={finalArray} outArray={finaltheArray}></Modal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default App;
