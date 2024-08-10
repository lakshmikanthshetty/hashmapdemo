import logo from './logo.svg';
import './App.css';
import './CenteredComponent.css';
import KeyValue from './KeyValue.js'
import './nesteddiv/nesteddiv.css'
import Header from './reactUIV1/Header';
import HashMapHeader from './HashMapHeader/HashMapHeader.js';
import { useState } from 'react';
import './KeyValue.css'

function Hashmap() {

  const [Items, setItems] = useState([]);

  const AddKeyValuePair = () => {
    console.log(Items);
    setItems(prevItems => [...prevItems, prevItems.length + 1]);
  };

  const keyvaluepair = <KeyValue />;

  return (
    <div>
      <HashMapHeader AddKeyValuePair={AddKeyValuePair}/>
    <div class="keyvaluepairdiv">
    <table className="keyvaluediv">
          <tr className="keyvaluetr">
          <td className="headertdoffset">
        Offset
            </td>
          <td className="headertdkvp">
        KeyValuepair
            </td></tr>
</table>
        {Items.map((Item, Index) => (
          <KeyValue/>
        ))}
    
    
    </div>

    <div class="offsetkeypairdiv">
    <table className="keyvaluediv">
          <tr className="keyvaluetr">
          <td className="headertdoffset">
        Key
            </td>
          <td className="headertdkvp">
        Offset
            </td></tr>
</table>
        {Items.map((Item, Index) => (
          <KeyValue/>
        ))}
    
    
    </div>
    </div>
  );
}

export default Hashmap;
