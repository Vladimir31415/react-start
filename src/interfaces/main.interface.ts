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

export interface MovieCollection {
    data:   MovieItem[];
    total:  number;
    offset: number;
    limit:  number;
}