import { fetch2 } from "../helpers/fetch";
import { FETCH_MOVIES, FETCH_MOVIE_BY_ID } from "./types";


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

export const fetchMovieById = (id: string) => (dispatch, getState) => {
    console.log(id);
    return fetch2('http://react-cdp-api.herokuapp.com/movies/' + id)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_MOVIE_BY_ID,
                payload: res
            })
            return res;
        })    
}
