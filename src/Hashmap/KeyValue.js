import React, { useState} from "react";
import './KeyValue.css'

function KeyValue({offset, keydata, value}) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
  
    return (
        <table className="keyvaluediv">
          <tr className="keyvaluetr">
          <td className="keyvaluetdoffeset">
        {offset}
            </td>
          <td className="keyvaluetdkvp">
        {keydata}:{value}
            </td></tr></table>
    );
  }

export default KeyValue;