import React, { useState} from "react";
import './KeyValue.css'
import '../Animation/CSSAnimation/CSSAnimation.css'

function KeyValue({offset, keydata, value, isDataTable}) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
    if(isDataTable)
    {
    return (
          <tr className="keyvaluetr">
          <td className="keyvaluetdoffeset">
        {offset}
            </td>
          <td className="keyvaluetdkvp">
        {keydata}:{value}
            </td></tr>
    );
  }
  else
  {
    return (
      <tr className="keyvaluetr">
      <td className="keyvaluetdoffeset">
      {keydata}
        </td>
      <td className="keyvaluetdkvp">
      {offset}
        </td></tr>
);
  }
  }

export default KeyValue;