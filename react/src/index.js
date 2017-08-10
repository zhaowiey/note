import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LI from './comm/LI';
import UL from './comm/UL';
//import CTop from './comm/CTop';
import Inputs from './comm/INPUTS';
import registerServiceWorker from './registerServiceWorker';









//ReactDOM.render(<CTop />, document.getElementById('root'));
ReactDOM.render(<Inputs />, document.getElementById('root'));
//ReactDOM.render(<UL />, document.getElementById('root'));
registerServiceWorker();
//设置浏览器的自动更新功能
if(module.hot){
  module.hot.accept();
}

