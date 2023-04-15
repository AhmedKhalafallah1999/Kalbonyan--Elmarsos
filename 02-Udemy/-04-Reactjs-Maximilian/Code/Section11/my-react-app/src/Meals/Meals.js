import { Fragment } from "react";
import MealsSummery from "./MealsSummery/MealsSummery";
import MealsList from "./MealsList/MealsList";
const Meals = (props) => {
  const numberOfProductsHandler = (number) => {
    props.numberOfProducts(number);
  };
  const finalPriceHandler = (array) => {
    props.finalProductsPrice(array);
  };
  const handlerArraysForCart = (a) => {
    props.finalTwoArrays(a);
  };
  return (
    <Fragment>
      <MealsSummery></MealsSummery>
      <MealsList
        numberOfProducts={numberOfProductsHandler}
        finalPriceWAmount={finalPriceHandler}
        arrayOfNumandPric={handlerArraysForCart}
      ></MealsList>
    </Fragment>
  );
};
export default Meals;
