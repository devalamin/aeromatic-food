import React, { useEffect, useState } from 'react';
import { addToDB, getStoredFood, } from '../../utility/demoDB';
import MenuCart from '../Menu/MenuCart';
import Meal from './Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setMeals(data))
    }, []);

    useEffect(() => {
        const storedFood = getStoredFood();
        const savedFood = [];
        for (const id in storedFood) {
            const addedFood = meals.find(singleMeal => (singleMeal.id) === id);
            if (addedFood) {
                const quantity = storedFood[id];
                addedFood.quantity = quantity;
                savedFood.push(addedFood);

            }
        }
        setRequiredTime(savedFood)
    }, [meals])

    const [requiredTime, setRequiredTime] = useState([])
    const addToCart = (meal) => {
        let newTime = []
        const exists = requiredTime.find(item => item.id === meal.id);
        if (!exists) {
            meal.quantity = 1;
            newTime = [...requiredTime, meal];
        }
        else {
            const left = requiredTime.filter(item => item.id !== meal.id)
            exists.quantity = exists.quantity + 1;
            newTime = [...left, exists]
        }

        setRequiredTime(newTime)
        addToDB(meal.id)
    }
    return (
        <div>
            <h1 className='header-text'>Aromatic Food</h1>
            <h2 className='sub-text'>Select Your Meals</h2>
            <div className='main-container'>

                <div className="meals-container">
                    {
                        meals.map(meal => <Meal
                            meal={meal}
                            key={meal.id}
                            addToCart={addToCart}
                        ></Meal>)
                    }
                </div>
                <div className="meals-cart">
                    <MenuCart requiredTime={requiredTime}></MenuCart>
                </div>
            </div>

        </div>
    );
};

export default Meals;