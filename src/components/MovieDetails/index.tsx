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
import { Footer } from "../Footer";

interface ComponentProps extends RouteComponentProps<any>{
    movie: MovieItem;
    fetchMovie: (id: string) => void;
}

interface ComponentState {}

export class MovieDetails extends React.Component<ComponentProps, ComponentState> {

    public render() {
        return (
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
                <Footer/>  
            </React.Fragment>
        )
    }
}
