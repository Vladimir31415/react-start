import { sortBy, SortByOptions, MovieItem } from "../interfaces/main";

const sortingFunc = (by: sortBy, movie1: MovieItem, movie2: MovieItem) => {
    switch(by) {
        case SortByOptions.Release: 
            return new Date(movie1.release_date) < new Date(movie2.release_date);
        case SortByOptions.Rating:
            return movie1.vote_average < movie2.vote_average;
    }
}
export default sortingFunc;