import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const AvailableMeals = () => {
  const [meals, setLoadingMeals] = useState([]);
  const [isLoaded, setLoadingStates] = useState(false);
  const [error, setError] = useState(null);
  const fetchMovies = async () => {
    setLoadingStates(true);
    setError(null);
    const result = await fetch(
      "https://demotest-364e7-default-rtdb.firebaseio.com/movies.json"
    );
    if (!result.ok) {
      throw new Error("Some whing went Wrong");
    }
    const data = await result.json();
    const transformedData = [];
    for (const key in data) {
      transformedData.push({
        id: key,
        description: data[key].description,
        name: data[key].name,
        price: data[key].price,
      });
    }

    setLoadingMeals(transformedData);
    setLoadingStates(false);
  };
  useEffect(() => {
    fetchMovies().then().catch((error) => {
      setError(error.message);
    });
   
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoaded && !error?  <p>Loading...</p> : <ul>{mealsList}</ul>}
        {error && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
