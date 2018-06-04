import { MovieItem, searchBy, MoviesCollection, sortBy, sortOrder } from "./main";

export interface FilterState {
    search: string;
    searchBy: searchBy;
    sortBy?: sortBy;
    sortOrder: sortOrder;
    limit?: number;
    offset?: number;
}

export interface MoviesState {
    movies: {
        currentItem: MovieItem
        collection: MoviesCollection;
        filter: FilterState;
    }
}