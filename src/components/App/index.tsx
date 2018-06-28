import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MovieDetails } from "../MovieDetails";
import MovieSearch from "../MovieSearch";
import {Provider} from 'react-redux';

interface ComponentProps {
    Router: any,
    location?: any,
    context?: any,
    store?: any
}

const App: React.SFC<ComponentProps> = ({Router, location, context, store}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <Route path="/search" component={MovieSearch}/>
                <Route path="/movie/:id" component={MovieDetails}/>
                <Redirect from='*' to='/search' />
            </Switch>
        </Router>
    </Provider>
)

export { App };
