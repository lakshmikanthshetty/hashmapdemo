import KeyValue from './KeyValue.js'
import HashMapHeader from '../HashMapHeader/HashMapHeader.js';
import { useState } from 'react';
import keyvaluedata from '../Data/KeyValuePair.json'
import keyvaluedataV1 from '../Data/KeyValuePairV1.json'
import '../Animation/CSSAnimation/CSSAnimation.css'
import './Hashmap.css'

function Hashmap() {
  const [delayKeyValueState, setDelayKeyValue] = useState([])
  const [hashIndexState, updateHashIndex] = useState([])
  const [showItems, setShowItems] = useState(false);
  const [latestOffsetState, setLatestOffsetState] = useState(5000);

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
      var currentOffset = latestOffsetState;
    let indexUpdateList = [];
      keyvaluedataindex.forEach((item, index) => {
        timer = setTimeout(() => {
          currentOffset = currentOffset + 1;
          setLatestOffsetState(currentOffset);
          item.offset = currentOffset;
          item.value = Math.random();
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
    <table>
      <tr>
        <td className='menutd'></td>
        <td className='bodytd'><table>
      <tr>
        <td colSpan='4'><HashMapHeader AddKeyValuePair={AddKeyValuePair} UpdateKeyValuePair={UpdateKeyValuePair}/></td>
      </tr>
      <tr>
        <td>   Hash Index - In Memory <div class="offsetkeypairdiv">
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
    </div></td>

        <td><div>  Key Value Pair Data  <div class="offsetkeypairdiv">
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
    
    </div></div></td>
    <td></td>
    <td></td>
      </tr>
    </table></td>
      </tr>
    </table>
    
  );
}

export default Hashmap;
