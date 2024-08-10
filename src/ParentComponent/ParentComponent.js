// ParentComponent.js
import React, { useState } from 'react';
import ItemComponent from './ItemComponent';

const ParentComponent = () => {
  // State to keep track of the number of items
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  const addItem = () => {
    setItems(prevItems => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      {/* Button to add new items */}
      <button onClick={addItem}>Add Item</button>

      {/* Render the list of items */}
      <div>
        {items.map((item, index) => (
          <ItemComponent key={index} index={item} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
