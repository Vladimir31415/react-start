import thunk from 'redux-thunk'
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from '../reducers';

// const initialState = {};

const middleware = [thunk];

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
    
    return store;
}

export default configureStore;