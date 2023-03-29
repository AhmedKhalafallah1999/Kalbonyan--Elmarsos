import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenesItem(props) {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  // const expenseDate = new Date(2023, 2, 28);
  // const expenseTitle = "Car Insurence";
  // const expenseAmount = "294.67";

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
    console.log("ittt");
  };
  return (
    // <div className="expense-item">
    //   {/* <div>March 28th 2021</div> */}
    //   <div>{expenseDate.toISOString()}</div>
    //   <div className="expense-item__description">
    //     {/* <h2>Car Insurence</h2> */}
    //     <h2>{expenseTitle}</h2>
    //     {/* <div className='expense-item__price'>$294.67</div> */}
    //     <div className="expense-item__price">{expenseAmount}</div>
    //   </div>
    // </div>
    <Card className="expense-item">
      {/* <div>March 28th 2021</div> */}
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <h2>Car Insurence</h2> */}
        <h2>{title}</h2>
        {/* <div className='expense-item__price'>$294.67</div> */}
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenesItem;
