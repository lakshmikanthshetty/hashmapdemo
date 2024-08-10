import React, { useState} from "react";
import DynamicItem from './DynamicItem';

const ManageDynamic = () => {

    const [items, setItems] = useState([]);

    const addItems = () => {
        const newItem = `Item ${Items.length + 1}`;
        setItems(...items, newItems);
    };

    return(
        <div className="app">
            <button onClick={addItems}>Add Item</button>
            <div className="item-list">
                {Items.map((Item, index) => (
                <DynamicItem key={index} content={Item}></DynamicItem>
                ))}
            </div>
        </div>
    );

};

export default ManageDynamic;