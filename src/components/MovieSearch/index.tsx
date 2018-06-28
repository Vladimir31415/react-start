import React from "react";
import {Footer} from '../Footer';
import { MoviesCollection, MovieItem } from "../../interfaces/main";
import { MovieSearchControl } from "../MovieSearchControl";
import { MovieSearchResults } from "../MovieSearchResults";
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions/movies";
import store from "../../store";
import { MoviesState } from "../../interfaces/state";
import { divideIntoColumns } from "../../helpers/columnDivider"

interface ComponentProps {
    fetchMovies:() => void;
}
interface ComponentState {
	moviesList: Array<MovieItem[]>
}
class MovieSearch extends React.Component<ComponentProps, ComponentState> {
	public columns = 3; 
    public collection: MoviesCollection;
    constructor(params) {
        super(params);
        this.state = {
            moviesList: []
        }
        this.props.fetchMovies()
    }
    
    static getDerivedStateFromProps(nextProps) {
        return ((nextProps.moviesList && nextProps.moviesList.length) ? 
            {moviesList: divideIntoColumns(nextProps.moviesList, 3)} : null)
    }
	
    render() {
        return (
			<React.Fragment>  	
				<MovieSearchControl/>			
				<MovieSearchResults itemRows={this.state.moviesList}/>	
				<Footer/>
			</React.Fragment>
        );
	}
}

const mapStateToProps = (state:MoviesState) => { return {
    moviesList: state.movies.collection.data
}}


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch); 