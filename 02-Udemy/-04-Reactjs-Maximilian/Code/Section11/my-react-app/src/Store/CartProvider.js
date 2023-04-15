import CartContext from "./CartContext";

import React, { useReducer } from "react";
const defaultCartState = {
  totalAmount: 0,
  items: [],
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.mealPrice * action.item.amount;
    return {
      totalAmount: updateTotalAmount,
      items: updateItems,

    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = () => {};
  const cartContext = {
    totalAmount: cartState.totalAmount,
    items: cartState.items,
    add: addItemHandler,
    remove: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
