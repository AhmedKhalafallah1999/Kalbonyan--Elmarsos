import "./MealsList.css";
import MealsItem from "../MealsItem/MealsItem";
import Card from "../../UI/CArd";
let productsCardNumberPrice = [];
let pric = [];
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = (props) => {
  const numberOfProductsHandler = (number, arrayProducts = [0, 0, 0, 0]) => {
    props.numberOfProducts(number);
    DUMMY_MEALS.forEach((item) => {
      pric.push(item.price);
    });
    props.arrayOfNumandPric(arrayProducts,pric);
    for (let i = 0; i < 4; i++) {
      productsCardNumberPrice.push(pric[i] * arrayProducts[i]);
    }
    pric = [];
    props.finalPriceWAmount(productsCardNumberPrice);
    productsCardNumberPrice = [];
  };
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealsItem
                numberOfProducts={numberOfProductsHandler}
                id={meal.id}
                mealName={meal.name}
                mealDescription={meal.description}
                mealPrice={meal.price}
                key={meal.id}
              ></MealsItem>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};
export default MealsList;
