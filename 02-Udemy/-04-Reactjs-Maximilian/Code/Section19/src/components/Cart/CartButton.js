import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const CartButton = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(cartActions.isToggled());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
