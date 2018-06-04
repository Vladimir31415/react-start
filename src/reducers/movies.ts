import { FETCH_MOVIES, SET_SEARCH_STRING, SET_SEARCH_BY, SORT_BY, SET_SORT_BY, FETCH_MOVIE_BY_ID, FETCH_MOVIE_BY_SAME_GENRE } from "../actions/types";
import { log } from "util";
import { MoviesState, MovieItemState } from "../interfaces/state";
import { MoviesCollection, SearchByOptions, SortByOptions, SortOrderOptions, MovieItem} from "../interfaces/main";
import sortingFunc from "../helpers/sorting";

const initialState = {
    currentItem: {},
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

        case FETCH_MOVIE_BY_ID:
            return {
                ...state,
                currentItem: action.payload
            }

        case FETCH_MOVIE_BY_SAME_GENRE:
            const fNewState = {...state};
            fNewState.currentItem = {
                ...state.currentItem,
                sameGenreCollection: action.payload
            }
            return fNewState;
        
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