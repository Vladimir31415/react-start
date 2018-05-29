import thunk from 'redux-thunk'
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;