import React from "react";
import Content from './reactUIV1/Content';
import Header from './reactUIV1/Header';
import Sidebar from './reactUIV1/Sidebar';
import './MFRA.css'

function MFRA(){
    return(
        <div className="app">
            <Header/>
        <div className="main-content">
        <Sidebar></Sidebar>
        <Content></Content>
        </div>
        </div>
    );
}

export default MFRA;