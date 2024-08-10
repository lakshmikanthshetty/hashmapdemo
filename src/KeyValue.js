import React, { useState} from "react";
import './App.css'
import './KeyValue.css'

function KeyValue() {
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
        offset
            </td>
          <td className="keyvaluetdkvp">
        kvp
            </td></tr></table>
    );
  }

export default KeyValue;