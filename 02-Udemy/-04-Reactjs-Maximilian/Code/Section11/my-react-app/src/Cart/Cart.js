import "./Cart.css";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
let sum = 0;
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Cart = (props) => {
  let [data, setData] = useState();
  useEffect(() => {
    props.outputToCart.forEach((element) => {
      sum = sum + element;
    });
    setData(sum);
    sum = 0;
  }, [props.outputToCart]);
  const bill = (newAmount, price, oldAmount) => {
    if (newAmount===0){
      
    }
    data -= price * oldAmount;
    data += newAmount * price;
    data = data.toFixed(2);
    setData(data);
  };

  const onHandler = () => {
    props.onCloseHandler(false);
  };
  return (
    <section>
      {/* {Items} */}
      <ul className="cart-items">
        {props.outArrayToCart[0] === 0 || props.outArrayToCart.length === 0 ? (
          ""
        ) : (
          <CartItem
            o={DUMMY_MEALS[0]}
            amount={props.outArrayToCart[0]}
            newAmountandPrice={bill}
          ></CartItem>
        )}
        {props.outArrayToCart[1] === 0 || props.outArrayToCart.length === 0 ? (
          ""
        ) : (
          <CartItem
            o={DUMMY_MEALS[1]}
            amount={props.outArrayToCart[1]}
            newAmountandPrice={bill}
          ></CartItem>
        )}
        {props.outArrayToCart[2] === 0 || props.outArrayToCart.length === 0 ? (
          ""
        ) : (
          <CartItem
            o={DUMMY_MEALS[2]}
            amount={props.outArrayToCart[2]}
            newAmountandPrice={bill}
          ></CartItem>
        )}
        {props.outArrayToCart[3] === 0 || props.outArrayToCart.length === 0 ? (
          ""
        ) : (
          <CartItem
            o={DUMMY_MEALS[3]}
            amount={props.outArrayToCart[3]}
            newAmountandPrice={bill}
          ></CartItem>
        )}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>${data}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onHandler}>
          Close
        </button>
        <button className="butto">Order</button>
      </div>
    </section>
  );
};
export default Cart;
