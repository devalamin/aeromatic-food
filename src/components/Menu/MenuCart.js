import React from 'react';
import './MenuCart.css'

const MenuCart = (props) => {
    const { requiredTime } = props;
    let neededTime = 0;
    for (const singleTime of requiredTime) {
        neededTime = neededTime + singleTime.time;
    }

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
                <h4>Eating Time: <span>{neededTime}</span></h4>
                <h4>Break Time: <span></span></h4>
            </div>
            <button>Completed</button>



        </div>
    );
};

export default MenuCart;