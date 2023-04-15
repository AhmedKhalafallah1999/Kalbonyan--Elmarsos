import MealItemForm from "./MealItemForm/MealItemForm";
import "./MealsItem.css";
const MealsItem = (props) => {
  const numberWillAddedToCardHandler = (number, arrayProducts) => {
    props.numberOfProducts(number, arrayProducts);
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
          numberWillAddedToCard={numberWillAddedToCardHandler}
        ></MealItemForm>
      </div>
    </li>
  );
};
export default MealsItem;
