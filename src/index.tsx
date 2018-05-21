import * as ReactDOM from "react-dom";
import * as React from 'react';
import 'bootstrap';
import './styles/main.scss';
import { MovieSearch } from "./components/MovieSearch/MovieSearch";

console.log('Starting with Webpack 4');

ReactDOM.render(
    <React.Fragment>
        <MovieSearch />
    </React.Fragment>,
    document.getElementById('app')
)