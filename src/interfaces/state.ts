import { MovieItem, searchBy, MoviesCollection, sortBy, sortOrder } from "./main";

export interface FilterState {
    search: string;
    searchBy: searchBy;
    sortBy?: sortBy;
    sortOrder?: sortOrder;
    limit?: number;
    offset?: number;
}

export interface MovieItemState extends MovieItem {
    sameGenreCollection: MoviesCollection;
}

export interface MoviesState {
    movies: {
        currentItem: MovieItemState
        collection: MoviesCollection;
        filter: FilterState;
    }
}