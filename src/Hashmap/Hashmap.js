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
import '../Animation/CSSAnimation/CSSAnimation.css'

function Hashmap() {

  const [KeyValuesState, setKeyValues] = useState([])
  const [delayKeyValueState, setDelayKeyValue] = useState([])
  
  const [showItems, setShowItems] = useState(false);

  const AddKeyValuePair = () => {
    setShowItems(true);

    setKeyValues(keyvaluedata);
    let timer;

    const renderDelayKeyValue = () => {
      keyvaluedata.forEach((item, index) => {
        timer = setTimeout(() => {
          setDelayKeyValue((prevItems) => [...prevItems, item]);
        }, index * 1000);
      });
    };

    renderDelayKeyValue();

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => { 
   
  },[]);

  return (
    <div>
      <HashMapHeader AddKeyValuePair={AddKeyValuePair}/>
    <div class="keyvaluepairdiv">
    <table className="keyvaluediv">
          <tr className="keyvaluetr">
          <th className="headertdoffset">
        Offset
            </th>
          <th className="headertdkvp">
        KeyValuepair
            </th></tr>
            {delayKeyValueState.map((Item, Index) => (
          <KeyValue offset={Item.offset} keydata={Item.keydata} value={Item.value}/>
        ))}
</table>

    
    
    </div>

    <div class="offsetkeypairdiv">

            {showItems && (
      <table className="keyvaluediv">
      <tr className="keyvaluetr">
      <th className="headertdoffset">
    Key
        </th>
      <th className="headertdkvp">
    Offset
        </th></tr>
    {delayKeyValueState.map((Item) => (
          <KeyValue offset={Item.offset} keydata={Item.keydata} value={Item.value}/>
        ))}
    </table>
      )}

    </div>
    </div>
  );
}

export default Hashmap;
