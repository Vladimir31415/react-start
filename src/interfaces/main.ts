export interface MovieItem {
    id:	            number;
    title:	        string;
    tagline:	    string;
    vote_average:	number;
    vote_count:	    number;
    release_date:	string;
    poster_path:	string;
    overview:	    string;
    budget:	        number;
    revenue:	    number;
    runtime:	    number;
    genres:         string[];
}

export interface MoviesCollection {
    data:   MovieItem[];
    total:  number;
    offset: number;
    limit:  number;
}

export enum SortByOptions {
    Rating = 'vote_average',
    Release = 'release_date'
}

export enum SearchByOptions {
    Title = 'title',
    Genres = 'genres'
}

export enum SortOrderOptions {
    asc = 'asc',
    desc = 'desc'
}

export type sortBy = SortByOptions.Rating | SortByOptions.Release;
export type sortOrder = SortOrderOptions.asc | SortOrderOptions.desc;
export type searchBy = SearchByOptions.Genres | SearchByOptions.Title;