import * as ReactDOM from "react-dom";
import * as React from 'react';
import 'bootstrap';
import './styles/main.scss';
import MovieSearch from "./components/MovieSearch";
import {MovieDetails} from './components/MovieDetails';
import { Provider } from 'react-redux';
import  store from './store';
import {HashRouter as Router, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { App } from "./components/App";
import routes from "./routes";

ReactDOM.hydrate(
    <App 
        Router={BrowserRouter}
    />,
    document.getElementById('app')
)
