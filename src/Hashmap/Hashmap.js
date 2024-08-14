import logo from '../logo.svg';
import '../App.css';
import '../CenteredComponent.css';
import KeyValue from './KeyValue.js'
import '../nesteddiv/nesteddiv.css'
import Header from '../reactUIV1/Header.js';
import HashMapHeader from '../HashMapHeader/HashMapHeader.js';
import { useEffect, useState } from 'react';
import './KeyValue.css'
import keyvaluedata from '../Data/KeyValuePair.json'

function Hashmap() {

  const [KeyValuesState, setKeyValues] = useState([])

  const [Items, setItems] = useState([]);

  const AddKeyValuePair = () => {
    console.log(Items);
    console.log(KeyValuesState);
    setItems(prevItems => [...prevItems, prevItems.length + 1]);
  };

  useEffect(() => { setKeyValues(keyvaluedata) }, []);

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
{KeyValuesState.map((Item, Index) => (
          <KeyValue offset={Item.offset} keydata={Item.keydata} value={Item.value}/>
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
    {KeyValuesState.map((Item) => (
          <KeyValue offset={Item.offset} keydata={Item.keydata} value={Item.value}/>
        ))}
    
    
    </div>
    </div>
  );
}

export default Hashmap;
