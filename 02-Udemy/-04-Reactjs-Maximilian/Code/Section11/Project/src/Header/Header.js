import React from "react";
import "./Header.css";
import HeaderCard from "./HeaderCardBtn";
const Header = (props) => {
  const handlerModal = (a)=>{
    props.onHandlerModal(a);
  }
  return (
    <React.Fragment>
      <div className="header">
        <h1>ReactMeals</h1>
        <HeaderCard SentToCart={props.n} handlerModal={handlerModal}></HeaderCard>
      </div>
      <div className="main-image">
        <img
          src={require("../imgs/meals.jpg")}
          alt="a table with delicious food "
        />
      </div>
    </React.Fragment>
  );
};
export default Header;
