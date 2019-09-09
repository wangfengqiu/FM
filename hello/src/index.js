import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/style.css';
import "./common/font-awesome-4.7.0/css/font-awesome.css";
import App from './App';
import "./mock/mock";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={store}><Router><App /></Router></Provider>
, document.getElementById('root'));


