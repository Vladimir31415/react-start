import * as ReactDOM from "react-dom";
import * as React from 'react';
import 'bootstrap';
import './styles/main.scss';
import MovieSearch from "./components/MovieSearch/MovieSearch";
import { Provider } from 'react-redux';
import  store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MovieSearch />
    </Provider>,
    document.getElementById('app')
)