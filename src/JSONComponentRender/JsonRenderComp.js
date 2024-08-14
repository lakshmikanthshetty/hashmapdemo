import React, {useState, useEffect} from "react";
import ItemComponent from './ItemComponent';
import data from './data.json'

const JsonRenderComp = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => { setItems(data) }, []);

    return(
        <div className="app">
            {Items.map((item) => (
                <ItemComponent name={item.id} description={item.description}></ItemComponent>
            ))}
        </div>
    );
};

export default JsonRenderComp;