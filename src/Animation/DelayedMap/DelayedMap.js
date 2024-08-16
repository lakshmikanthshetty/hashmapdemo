import React, { useState, useEffect } from 'react';

// Function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const DelayedMap = ({ items }) => {
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const handleDelay = async () => {
      const results = [];

      for (const item of items) {
        // Add the item to the results array
        results.push(item);

        // Update the state with the new list
        setDisplayedItems([...results]);

        // Wait for 1 second (1000 ms) before continuing
        await delay(1000);
      }
    };

    handleDelay();
  }, [items]);

  return (
    <div>
      {displayedItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default DelayedMap;
