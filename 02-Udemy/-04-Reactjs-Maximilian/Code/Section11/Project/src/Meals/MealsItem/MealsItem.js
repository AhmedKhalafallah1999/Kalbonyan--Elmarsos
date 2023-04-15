import MealItemForm from "./MealItemForm/MealItemForm";
import { useContext } from "react";
import "./MealsItem.css";
import CartContext from "../../store/cartContext";
const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice,
    });
    console.log(cartCtx)
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.mealName}</h3>
        <p className="description">{props.mealDescription}</p>
        <p className="price">${props.mealPrice}</p>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={onAddToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
};
export default MealsItem;
