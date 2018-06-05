import * as ReactDOM from "react-dom";
import * as React from 'react';
import 'bootstrap';
import './styles/main.scss';
import MovieSearch from "./components/MovieSearch/MovieSearch";
import { Provider } from 'react-redux';
import  store from './store';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { App } from "./components/App";
import { fetchMovieById } from "./actions/movies";
import {MovieDetails} from '../src/components/MovieDetails';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/search" component={MovieSearch}/>
                    <Route path="/movie/:id" component={MovieDetails}/>
                    <Redirect from='*' to='/search' />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
)
