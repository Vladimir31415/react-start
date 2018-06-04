import React from "react";
import './styles.scss';
import { RouteComponentProps } from "react-router";
import {connect} from 'react-redux';
import { MoviesState } from "../../interfaces/state";
import { MovieItem } from "../../interfaces/main";
import { fetchMovieById } from "../../actions/movies";
import MovieDetailsInfo from '../MovieDetailsInfo';
import { MovieDetailsHeader } from "../MovieDetailsHeader";
import SameGenre from "../SameGenre";

interface ComponentProps extends RouteComponentProps<any>{
    movie: MovieItem;
    fetchMovie: (id: string) => void;
}

interface ComponentState {}

class MovieDetails extends React.Component<ComponentProps, ComponentState> {

    public render() {
        const movie = this.props.movie ? this.props.movie : {} as MovieItem; 
        return ( this.props.movie ?
            <React.Fragment>
                <div className="movie-details p-4">
                    <div className="container">
                        <MovieDetailsHeader/>
                        <div className="row">
                            <MovieDetailsInfo />
                        </div>
                    </div>
                </div>
                <SameGenre/>   
            </React.Fragment> : null
        )
    }
}

const mapStateToProps = (state: MoviesState) => {
    return {
        movie: state.movies.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie:(id: string) => dispatch(fetchMovieById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)