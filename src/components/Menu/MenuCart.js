import React, { useEffect, useState } from 'react';
import { addToDB, getStoredFood } from '../../utility/demoDB';
import './MenuCart.css'

const MenuCart = (props) => {
    const { requiredTime } = props;
    let neededTime = 0;
    let quantity = 0;
    for (const singleTime of requiredTime) {
        quantity = quantity + singleTime.quantity
        neededTime = neededTime + singleTime.time * singleTime.quantity;
    }
    const [breakTime, setBreakTime] = useState([])
    useEffect(() => {
        fetch('breaks.json')
            .then(res => res.json())
            .then(data => setBreakTime(data))
    }, [])

    const [finalBreak, setFinalBreak] = useState([])

    useEffect(() => {
        const storedBreak = getStoredFood();
        const savedBreak = [];
        for (const id in storedBreak) {
            const addedBreak = breakTime.find(singleBreak => (singleBreak.id) === id);
            if (addedBreak) {
                const quantity = storedBreak[id];
                addedBreak.quantity = quantity;
                savedBreak.push(addedBreak);
            }
        }
        setFinalBreak(savedBreak);
    }, [breakTime])


    const handleBreakTime = (breakTime) => {
        // let newBreak = 0;
        // const exists = finalBreak.find(item => item.id === breakTime.id);

        // if (!exists) {
        //     breakTime.quantity = 1;

        // }
        // else {
        //     const rest = finalBreak.filter(item => item.id !== breakTime.id);
        //     exists.quantity = exists.quantity + 1;
        //     newBreak = [...rest, exists]
        // }
        const newBreak = [...finalBreak, breakTime]
        setFinalBreak(newBreak)
        addToDB(breakTime.id)

    }

    let breakingTime = 0;
    let breakingQuantity = 0;
    for (const finalBreakTime of finalBreak) {
        breakingTime = finalBreakTime.time;
        breakingQuantity = breakingQuantity + finalBreakTime.quantity;
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