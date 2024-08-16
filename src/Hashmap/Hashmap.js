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

  const [delayKeyValueState, setDelayKeyValue] = useState([])
  const [hashIndexState, updateHashIndex] = useState([])
  
  const [showItems, setShowItems] = useState(false);

  const AddKeyValuePair = () => {
    setShowItems(true);

    let timer;



    const hashIndexUpdate = (item) => {

      console.log(hashIndexState);
      if(hashIndexState.length == 0)
      {
        updateHashIndex((prevIndex) => [...prevIndex, item])
      }
      else
      {
        updateHashIndex(hashIndexState.map(indexItem => 
          indexItem.keydata === item.keydata?{...indexItem,...item}:indexItem
        ));
      }
    };

    const renderDelayKeyValue = () => {
      keyvaluedata.forEach((item, index) => {
        timer = setTimeout(() => {
          setDelayKeyValue((prevItems) => [...prevItems, item]);
          hashIndexUpdate({"keydata" : item.keydata, "offset" : item.offset});
        }, index * 1000);
      });
    };


    renderDelayKeyValue();

    return () => {
      clearTimeout(timer);
    };
  };

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
          <KeyValue offset={Item.offset} keydata={Item.keydata} value={Item.value} isDataTable={true}/>
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
    {hashIndexState.map((Item) => (
          <KeyValue offset={Item.offset} keydata={Item.keydata} value="dummy" isDataTable={false}/>
        ))}
    </table>
      )}

    </div>
    </div>
  );
}

export default Hashmap;
