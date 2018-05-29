import { FETCH_MOVIES, SET_SEARCH_STRING } from "./types";
import { fetch2 } from "../helpers/fetch";
import { log } from "util";

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