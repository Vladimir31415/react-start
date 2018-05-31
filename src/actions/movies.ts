import { FETCH_MOVIES, SET_SEARCH_STRING, SET_SEARCH_BY, SORT_BY, SET_SORT_BY } from "./types";
import { fetch2 } from "../helpers/fetch";
import { log } from "util";
import { searchBy, sortBy } from "../interfaces/main";

export const fetchMovies = () => (dispatch, getState) => {
    const filter = getState().movies.filter;
    return fetch2('http://react-cdp-api.herokuapp.com/movies', {queryParams:filter})
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_MOVIES,
                payload: res
            })
        })    
}

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

export const setSortBy = (sortBy: sortBy) => dispatch => {
    dispatch({
        type: SET_SORT_BY,
        payload: sortBy
    })
}

export const sortByProp = (sortString: sortBy) => dispatch => {
    dispatch({
        type: SORT_BY,
        payload: sortString
    });
    dispatch({
        type: SET_SORT_BY,
        payload: sortString
    })
}