import React from "react";
import './HashMapHeader.css'

function HashMapHeader({ AddKeyValuePair }){

    return(
        <div className="HashMapHeader">
<button className="menuItemAddButton" onClick={AddKeyValuePair}>Add Item</button>
        </div>
    );
}

export default HashMapHeader;