import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasHttpError, setHTTPError] = useState();

  const transformData = (data) => {
    const newData = [];
    for(const key in data){
      newData.push({
        id: key, 
        ...data[key]
      });
    }
    return newData; 
  };

  useEffect(() => {

    const fetchMeals = async () => {
      
      const response = await fetch('https://udemy-http-d85fd-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();
      console.log(responseData);

      let meals = transformData(responseData);

      setMeals(meals);
      setIsLoading(false);
    };
    
      fetchMeals().catch(error => {
        setIsLoading(false);
        setHTTPError(error.message);
      });
    
    // catch(error) {
    //   setIsLoading(false);
    //   setHTTPError(error.message);
      
    // }
    
  }, []);

  if(isLoading){
    return (<section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>);
  }
  if(hasHttpError){
    return (<section className={classes.MealsError}>
      <p>{hasHttpError}</p>
    </section>);
  }
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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
