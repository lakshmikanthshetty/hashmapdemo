import React from "react";

const ItemComponent = ({ name, description}) => {
    return (
        <div className="item">
            <h2>
                {name}
            </h2>
            <p>
                {description}
            </p>
        </div>
    );
};

export default ItemComponent;