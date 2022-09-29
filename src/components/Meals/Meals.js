import React, { useEffect, useState } from 'react';
import MenuCart from '../Menu/MenuCart';
import Meal from './Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setMeals(data))
    }, [])

    const [requiredTime, setRequiredTime] = useState([])
    const addToCart = (meal) => {
        const newTime = [...requiredTime, meal];
        setRequiredTime(newTime)

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