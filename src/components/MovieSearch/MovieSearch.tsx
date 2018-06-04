import React from "react";
import {Footer} from '../Footer';
import { MoviesCollection, MovieItem } from "../../interfaces/main";
import { fetch2 } from "../../helpers/fetch";
import { MovieSearchControl } from "../MovieSearchControl";
import { MovieSearchResults } from "../MovieSearchResults";
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions/movies";
import store from "../../store";
import { MoviesState } from "../../interfaces/state";

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
            {moviesList: MovieSearch.divideIntoColumns(nextProps.moviesList, 3)} : null)
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
	
	static divideIntoColumns(data: MovieItem[], cols: number) {
        let arData: Array<MovieItem[]> = [];
        const rows = data.length / cols;
        for(let row = 0; row < rows; row++) {
            arData.push(data.filter((val, ind) => ind >= row*cols && ind < row*cols+cols));
        } 
        return arData;
    }
}

const mapStateToProps = (state:MoviesState) => { return {
    moviesList: state.movies.collection.data
}}


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch); 