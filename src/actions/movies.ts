import { FETCH_MOVIES, FETCH_MOVIE_BY_ID, FETCH_MOVIE_BY_SAME_GENRE } from "./types";
import { MovieItem, SearchByOptions } from "../interfaces/main";
import { FilterState } from "../interfaces/state";
declare var require: Function;

const fetch2 = require('isomorphic-fetch');

export const fetchMovies = () => (dispatch, getState) => {
    const filter: FilterState = getState().filter;
    return fetch2('http://react-cdp-api.herokuapp.com/movies', {queryParams:filter})
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_MOVIES,
                payload: res
            })
        })    
}

export const fetchMovieById = (id: string) => (dispatch, getState) => {
    return fetch2('http://react-cdp-api.herokuapp.com/movies/' + id)
        .then(res => res.json())
        .then((res: MovieItem) => {
            dispatch({
                type: FETCH_MOVIE_BY_ID,
                payload: res
            })
            const filter: FilterState = {
                searchBy: SearchByOptions.Genres,
                search: res.genres[0],
                limit: getState().filter.limit
            }
            return fetch2('http://react-cdp-api.herokuapp.com/movies', {queryParams:filter})
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_MOVIE_BY_SAME_GENRE,
                payload: res
            })
        })    
}
