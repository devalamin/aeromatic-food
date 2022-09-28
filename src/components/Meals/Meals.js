import React, { useEffect, useState } from 'react';
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
                        meals.map(meal => <Meal meal={meal}></Meal>)
                    }
                </div>
                <div className="meals-cart">
                    <h1>this is cart</h1>
                </div>
            </div>

        </div>
    );
};

export default Meals;