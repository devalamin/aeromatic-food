import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { img, name, detail, age, time } = props.meal;

    return (
        <div className='meal'>
            <div className='single-meal'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p><small>{detail.slice(0, 100)}</small></p>
                <p>For Age:<strong>{age}</strong></p>
                <h5>Time Required:<small>{time}s</small></h5>
                <button><strong>Add To List</strong></button>
            </div>

        </div>
    );
};

export default Meal;