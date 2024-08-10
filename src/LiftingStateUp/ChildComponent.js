import React from "react";

const ChildComponent = ({ onButtonClick }) => {
return(
    <div>
        <h2>Child Component</h2>
        <button onClick={onButtonClick}>Click me!</button>
    </div>
);
};

export default ChildComponent;