import { FETCH_MOVIES, SET_SEARCH_STRING, SET_SEARCH_BY, SORT_BY, SET_SORT_BY } from "./types";
import { searchBy, sortBy } from "../interfaces/main";

export const setSearchString = (searchString: string) => dispatch => {
    dispatch({
        type: SET_SEARCH_STRING,
        payload: searchString
    })
}

export const setSearchBy = (searchString: searchBy) => dispatch => {
    dispatch({
        type: SET_SEARCH_BY,
        payload: searchString
    })
}

const setSortByAction = (sortBy:sortBy) => {return {type: SET_SORT_BY, payload: sortBy}};

export const setSortBy = (sortBy: sortBy) => dispatch => {
    dispatch(setSortByAction(sortBy))
}

export const sortByProp = (sortBy: sortBy) => dispatch => {
    dispatch({
        type: SORT_BY,
        payload: sortBy
    });
    dispatch(setSortByAction(sortBy));
}