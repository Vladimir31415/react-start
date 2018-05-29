import { MovieItem, sGenres, sTitle } from "./main";

export interface MovieFilter {
    search: string;
    searchBy: sTitle | sGenres;
    limit?: number;
    offset?: number;
}

export interface MoviesState {
    movies: {
        collection: {
            data: Array<MovieItem>;
            limit: number;
            offset: number;
            total: number;
        }
        filter: MovieFilter;
    }
}