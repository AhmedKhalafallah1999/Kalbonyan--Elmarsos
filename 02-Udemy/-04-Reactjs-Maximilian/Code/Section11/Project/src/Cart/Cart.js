import "./Cart.css";
import { useContext } from "react";
import CartContext from "../store/cartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const onCloseHandler = (a) => {
    props.onClose(false);
  };
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const Item = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
          >
            {item.name}
          </CartItem>
        );
      })}
    </ul>
  );

  return (
    <section>
      {Item}

      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onCloseHandler}>
          Close
        </button>
        {hasItems && <button className="butto">Order</button>}
      </div>
    </section>
  );
};
export default Cart;
