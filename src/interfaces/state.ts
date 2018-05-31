import { MovieItem, searchBy, MoviesCollection, sortBy, sortOrder } from "./main";

export interface MovieFilter {
    search: string;
    searchBy: searchBy;
    sortBy?: sortBy;
    sortOrder: sortOrder;
    limit?: number;
    offset?: number;
}

export interface MoviesState {
    movies: {
        collection: MoviesCollection;
        filter: MovieFilter;
    }
}