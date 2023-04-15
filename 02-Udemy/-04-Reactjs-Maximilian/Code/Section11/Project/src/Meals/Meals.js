import { Fragment } from "react";
import MealsSummery from "./MealsSummery/MealsSummery";
import MealsList from "./MealsList/MealsList";
const Meals = (props)=>{
  return( 
  <Fragment>
    <MealsSummery></MealsSummery>
    <MealsList></MealsList>
  </Fragment>
  )
}
export default Meals;