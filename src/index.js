import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hashmap from './Hashmap/Hashmap';
import reportWebVitals from './reportWebVitals';
import MFRA from './MFRA'
import ComponentReplica from './ComponentReplica/ComponentReplica'
import NestedDiv from './nesteddiv/nesteddiv';
//import ParentComponent from './LiftingStateUp/ParentComponent'
import DynaumicComponentContainer from './DynamicComponent/DynamicComponent';
import ParentComponent from './ParentComponent/ParentComponent';
import JsonRenderComp from './JSONComponentRender/JsonRenderComp';
import CSSAnimation from './Animation/CSSAnimation/CSSAnimation';
import DelayedMap from './Animation/DelayedMap/DelayedMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hashmap />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
