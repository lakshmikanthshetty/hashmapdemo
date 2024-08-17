import logo from '../logo.svg';
import '../App.css';
import '../CenteredComponent.css';
import KeyValue from './KeyValue.js'
import Header from '../reactUIV1/Header.js';
import HashMapHeader from '../HashMapHeader/HashMapHeader.js';
import { useEffect, useState } from 'react';
import './KeyValue.css'
import keyvaluedata from '../Data/KeyValuePair.json'
import keyvaluedataV1 from '../Data/KeyValuePairV1.json'
import '../Animation/CSSAnimation/CSSAnimation.css'

function Hashmap() {

  const [delayKeyValueState, setDelayKeyValue] = useState([])
  const [hashIndexState, updateHashIndex] = useState([])
  const [showItems, setShowItems] = useState(false);

  const dataStateRender = (keyvaluedataindex) => {
    setShowItems(true);

    let timer;

    function compareModelDataonFields(modelArray1, modelArray2, key)
    {
      const set1 = new Set(modelArray1.map(item => item[key]));
      const set2 = new Set(modelArray2.map(item => item[key]));

      const onlyInArray1 = modelArray1.filter(item => !set2.has(item[key]));
      const onlyInArray2 = modelArray2.filter(item => !set1.has(item[key]));
      const inBothArray = modelArray2.filter(item => set1.has(item[key]));

      return onlyInArray1.concat(onlyInArray2).concat(inBothArray);
    }


    const renderDelayKeyValue = () => {
    let indexUpdateList = [];
      keyvaluedataindex.forEach((item, index) => {
        timer = setTimeout(() => {
          setDelayKeyValue((prevItems) => [...prevItems, item]);
          indexUpdateList = [...indexUpdateList, {"keydata" : item.keydata, "offset" : item.offset}];
          var arrayDiffs = compareModelDataonFields(hashIndexState, indexUpdateList, "keydata");
          updateHashIndex(arrayDiffs);

        }, index * 1000);
      });

    };


    renderDelayKeyValue();

    return () => {
      clearTimeout(timer);
    };
  };

  const AddKeyValuePair = () => {
    dataStateRender(keyvaluedata);
  };

  const UpdateKeyValuePair = () => {
    dataStateRender(keyvaluedataV1);
  };

  return (
    <div>
      <HashMapHeader AddKeyValuePair={AddKeyValuePair} UpdateKeyValuePair={UpdateKeyValuePair}/>
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
    </div>
    </div>
  );
}

export default Hashmap;
