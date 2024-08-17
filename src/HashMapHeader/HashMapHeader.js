import React from "react";
import './HashMapHeader.css'

function HashMapHeader({ AddKeyValuePair, UpdateKeyValuePair }){

    return(
        <div className="HashMapHeader">
            <table>
                <tr>
                    <td>
<button className="menuItemAddButton" onClick={AddKeyValuePair}>Add Item</button>
                    </td>
                    <td>
<button className="menuItemAddButton" onClick={UpdateKeyValuePair}>Update Item</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default HashMapHeader;