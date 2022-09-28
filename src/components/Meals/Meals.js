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
                        ></Meal>)
                    }
                </div>
                <div className="meals-cart">
                    <MenuCart></MenuCart>
                </div>
            </div>

        </div>
    );
};

export default Meals;