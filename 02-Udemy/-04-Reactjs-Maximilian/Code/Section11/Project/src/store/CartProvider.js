import CartContext from "./cartContext";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCardItem = state.items[existingCardItemIndex];
    let updateItems;
    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCardItemIndex] = updatedItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const ItemIndex = state.items.findIndex((item) => item.id === action.id);
    let updateItems;
    let updatedItem;
    if (state.items[ItemIndex].amount >= 2) {
      updatedItem = {
        ...state.items[ItemIndex],
        amount: state.items[ItemIndex].amount - 1,
      };
      updateItems = [...state.items];
      updateItems[ItemIndex] = updatedItem;
      const updateTotalAmount =
        state.totalAmount - updateItems[ItemIndex].price;

      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };
    } else if(state.items[ItemIndex].amount ===1) {
      updatedItem = {
        ...state.items[ItemIndex],
        amount: state.items[ItemIndex].amount - 1,
      };
      updateItems = [...state.items];
      updateItems[ItemIndex] = updatedItem;
      const updateTotalAmount =
        state.totalAmount - updateItems[ItemIndex].price;


      // updateItems = state.items.slice(ItemIndex);
      updateItems = state.items.filter(function (letter) {
        return letter.id !== action.id;
      });

      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };
    }
  }
  return defaultCartState;
};
const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCardHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCardHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CardProvider;
