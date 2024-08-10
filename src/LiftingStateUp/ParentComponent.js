import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [message, setMessage] = useState('');

    const handleButtonClick = () => {
        setMessage('Button clicked in ChildComponent!');
        alert(message);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onButtonClick={handleButtonClick}></ChildComponent>
        </div>
    );
};

export default ParentComponent;
