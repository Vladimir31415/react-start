import { FETCH_MOVIES, SET_SEARCH_STRING } from "../actions/types";
import { log } from "util";

const initialState = {
    collection: [],
    filter: {
        limit: 9,
        searchBy: 'title',
        search: ''
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                collection: action.payload
            }
        
        case SET_SEARCH_STRING:
            const filter = {...state.filter, search: action.payload}
            return {
                ...state,
                filter
            }
        default: 
            return state;
    }
}