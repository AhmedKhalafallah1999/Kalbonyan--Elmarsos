import { useState } from "react";
import "./CartItem.css";
const CartItem = (props) => {
  const [count, setCount] = useState(props.amount);
  // const price = `$${props.o.price.toFixed(2)}`;
  return (
    <li className="cart-item">
      <div>
        <h2>{props.o.name}</h2>
        <div className="summery">
          <span className="price">{props.o.price}</span>
          <span className="amount">x{count}</span>
        </div>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            setCount(count - 1);
            props.newAmountandPrice(count - 1, props.o.price, count);
          }}
        >
          −
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            props.newAmountandPrice(count + 1, props.o.price, count);
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
