import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { addToCart, meal } = props;
    // console.log(meal.id)
    const { img, name, detail, age, time } = meal;

    return (
        <div className='meal'>
            <div className='single-meal'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p><small>{detail.slice(0, 100)}</small></p>
                <p>For Age:<strong>{age}</strong></p>
                <h5>Time Required:<small>{time}s</small></h5>
                <button onClick={() => addToCart(meal)}><strong>Add To List</strong></button>
            </div>

        </div>
    );
};

export default Meal;