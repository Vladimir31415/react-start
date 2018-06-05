import { SearchByOptions, SortOrderOptions, SortByOptions } from "../interfaces/main";
import { SET_SEARCH_STRING, SET_SEARCH_BY, SET_SORT_BY, SORT_BY } from "../actions/types";
import store from "../store";


const initialState = {
    limit: 9,
    searchBy: SearchByOptions.Title,
    sortBy: SortByOptions.Rating,
    sortOrder: SortOrderOptions.desc,
    search: ''
}

export default function(state = initialState, action) {
    let filter;
    switch(action.type) {
        case SET_SEARCH_STRING:
            return {
                ...state,
                search: action.payload
            }

        case SET_SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload
            }

        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.payload
            }
        }

        default: 
            return state;
    }
}