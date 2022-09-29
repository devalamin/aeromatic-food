import React, { useEffect, useState } from 'react';
import './MenuCart.css'

const MenuCart = (props) => {
    const { requiredTime } = props;
    let neededTime = 0;
    for (const singleTime of requiredTime) {
        neededTime = neededTime + singleTime.time;
    }
    const [breakTime, setBreakTime] = useState([])
    useEffect(() => {
        fetch('breaks.json')
            .then(res => res.json())
            .then(data => setBreakTime(data))
    }, [])

    const [finalBreak, setFinalBreak] = useState([])
    const handleBreakTime = (breakTime) => {
        const newBreak = [...finalBreak, breakTime]
        setFinalBreak(newBreak)
        console.log(finalBreak)
    }
    let breakingTime = 0;
    for (const finalBreakTime of finalBreak) {
        breakingTime = finalBreakTime.time;
    }
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
                        breakTime.map(singleTime => <li
                            onClick={() => handleBreakTime(singleTime)}
                        >{singleTime.time}</li>)
                    }
                </ul>
            </div>
            <div className="details">
                <h2>Processing</h2>
                <h4>Eating Time: <span>{neededTime}</span></h4>
                <h4>Break Time: <span>{breakingTime}</span></h4>
            </div>
            <button>Completed</button>



        </div>
    );
};

export default MenuCart;