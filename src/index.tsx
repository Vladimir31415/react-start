import * as ReactDOM from "react-dom";
import * as React from 'react';
import 'bootstrap';
import './styles/main.scss';
import MovieSearch from "./components/MovieSearch/MovieSearch";
import { Provider } from 'react-redux';
import  store from './store';

console.log('Starting with Webpack 4');

ReactDOM.render(
    <Provider store={store}>
        <MovieSearch />
    </Provider>,
    document.getElementById('app')
)