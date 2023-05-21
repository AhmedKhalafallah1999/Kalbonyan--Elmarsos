import classes from "./CartItem.module.css";
import { cartActions } from '../store/index';
import { useSelector, useDispatch } from "react-redux";

const CartItem = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch(cartActions.increament());
  };
  const decreamentHandler = () => {
    dispatch(cartActions.decreament());
  };
  const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{counter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreamentHandler}>-</button>
          <button onClick={increamentHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
