import React from "react";
import { NetflixLabel } from "../NetflixLabel";
import './styles.scss';
import { RouteComponentProps } from "react-router";
import {connect} from 'react-redux';
import { MoviesState } from "../../interfaces/state";
import { MovieItem } from "../../interfaces/main";
import { fetchMovieById } from "../../actions/movies";
import { CLIENT_RENEG_LIMIT } from "tls";

interface ComponentProps extends RouteComponentProps<any>{
    movie: MovieItem;
    fetchMovie: (id: string) => void;
}

interface ComponentState {}

class MovieDetails extends React.Component<ComponentProps, ComponentState> {

    public componentDidMount() {
        const {movie, fetchMovie, match} = this.props;
        if(!movie && match.params.id) {
            fetchMovie(match.params.id);
        }
    }

    static getDerivedStateFromProps(props) {
        console.log(props);
    }

    public render() {
        return ( this.props.movie ?
            <React.Fragment>
            <div className="movie-details px-4 pb-4">
                <div className="container">
                    <div className="row header">
                        <div className="col-sm-6">
                            <NetflixLabel/>    
                        </div>
                        <div className="col-sm-6 text-right">
                            <button className="btn">Search</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card-img-container">
                                <img className="card-img" src="https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"/>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card card-details">
                                <div className="card-body">
                                    <h4 className="card-title text-primary d-inline-block mr-4">{this.props.movie.title}</h4>
                                    <div className="rating-badge p-2 d-inline-block">4.1</div>
                                    <p className="card-text">Tagline</p>
                                    <div className="runtime-info d-inline-block font-weight-bold mr-4 mb-2">
                                        1994
                                    </div>
                                    <div className="runtime-info d-inline-block font-weight-bold mr-4 mb-2">
                                        158min
                                    </div>
                                    <p className="card-text">
                                        With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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