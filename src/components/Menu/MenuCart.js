import React from 'react';
import './MenuCart.css'

const MenuCart = () => {
    const breaks = [20, 30, 50, 40];
    return (
        <div className='menu-cart'>
            <div className="my-info">
                <h3>Muhammad Al Amin</h3>
                <h4>Dhaka,Bangladesh</h4>
                <p>A Happy Learner</p>
            </div>
            <div className="break-time">
                <h4>Add A Break</h4>
                <ul>
                    {
                        breaks.map(time => <li>{time}</li>)
                    }
                </ul>
            </div>
            <div className="details">
                <h2>Processing</h2>
                <h4>Eating Time: </h4>
                <h4>Break Time: </h4>
            </div>



        </div>
    );
};

export default MenuCart;