import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
            <div className="mainDiv">
                <div className="one">
                    <h1><strong>Question:How does react works?</strong></h1>
                    <p>
                        React.js is one of the most talked about JavaScript web frameworks in years. React is a very simple and straightforward JavaScript library. Working with it is very easy for anyone who has basic JavaScript knowledge.
                        With React, the web developers can create a representation of a DOM node and this can be done by declaring the Element function in React.
                        One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.
                    </p>
                </div>
                <div className="two">
                    <h1><strong>Difference between props and state</strong></h1>
                    <p>
                        <strong>State:</strong>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                        <br></br>
                        <br></br>
                        <strong>Props:</strong>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.

                    </p>
                </div>
                <div className="three">
                    <h1><strong>UseEffect uses in React</strong></h1>
                    <p>
                        useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output.
                        useEffect helps us to organize our code.It prevents code repetition.It replaces componentDidMount(),componentDidUpdate() and componentWillUnmount()
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Answer;