import React from "react";
import './HashMapHeader.css'

function HashMapHeader({ AddKeyValuePair, UpdateKeyValuePair }){

    return(
        <div className="HashMapHeader">
<button className="menuItemAddButton" onClick={AddKeyValuePair}>Add Item</button>
<button className="menuItemAddButton" onClick={UpdateKeyValuePair}>Update Item</button>
        </div>
    );
}

export default HashMapHeader;