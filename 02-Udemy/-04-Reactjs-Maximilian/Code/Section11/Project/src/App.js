import React, { useState } from "react";
import CardProvider from "./store/CartProvider";
import "./App.css";
import Header from "./Header/Header";
import Meals from "./Meals/Meals";
import Modal from "./Cart/Modal";
function App() {
  const [state, setModal] = useState(false);
  const onHandlerModal = (a) => {
    setModal(a);
  };
  const onCloseHandler = (a)=>{
    setModal(a);
  }
  return (
    <CardProvider>
      <Header onHandlerModal={onHandlerModal}></Header>
      <Meals></Meals>
      {state && <Modal onClose={onCloseHandler}></Modal>}
    </CardProvider>
  );
}

export default App;
