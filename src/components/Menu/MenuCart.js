import React, { useEffect, useState } from 'react';
import { addToDB, getStoredFood } from '../../utility/demoDB';
import './MenuCart.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const MenuCart = (props) => {

    function AutohideExample() {
        const [show, setShow] = useState(false);

        return (
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto"> <h2>Congratulation</h2></strong>
                            <small></small>
                        </Toast.Header>
                        <Toast.Body>You Have Completed Your Food</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Completed</Button>
                </Col>
            </Row>
        );
    }



    // toast
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
            <AutohideExample></AutohideExample>



        </div>
    );
};

export default MenuCart;