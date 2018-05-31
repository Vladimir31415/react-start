import { FETCH_MOVIES, SET_SEARCH_STRING, SET_SEARCH_BY, SORT_BY, SET_SORT_BY } from "../actions/types";
import { log } from "util";
import { MoviesState } from "../interfaces/state";
import { MoviesCollection, SearchByOptions, SortByOptions, SortOrderOptions} from "../interfaces/main";
import sortingFunc from "../helpers/sorting";

const initialState = {
    collection: {} as MoviesCollection,
    filter: {
        limit: 9,
        searchBy: SearchByOptions.Title,
        sortBy: SortByOptions.Rating,
        sortOrder: SortOrderOptions.desc,
        search: ''
    }
}

export default function(state = initialState, action) {
    let filter;
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                collection: action.payload
            }
        
        case SET_SEARCH_STRING:
            filter = {...state.filter, search: action.payload}
            return {
                ...state,
                filter
            }

        case SET_SEARCH_BY:
            filter = {...state.filter, searchBy: action.payload}
            return {
                ...state,
                filter
            }

        case SET_SORT_BY: {
            filter = {...state.filter, sortBy: action.payload}
            return {
                ...state,
                filter
            }
        }

        case SORT_BY: 
            const newState = {...state};
            newState.collection = {
                ...state.collection,
                data: [...state.collection.data.sort(sortingFunc.bind(null, action.payload))]
            };
            return newState;

        default: 
            return state;
    }
}