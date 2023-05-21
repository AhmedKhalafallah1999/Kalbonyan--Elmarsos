import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const counter = useSelector((state) => state.counter);
  const isShownToggled = useSelector((state) => state.isToggled);
  return (
    <Card className={classes.cart}>
      {isShownToggled && (
        <Fragment>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{
                title: "Test Item",
                quantity: counter,
                total: 6 * counter,
                price: 6,
              }}
            />
          </ul>
        </Fragment>
      )}
    </Card>
  );
};

export default Cart;
