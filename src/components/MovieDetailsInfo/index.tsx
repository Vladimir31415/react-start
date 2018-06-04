import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { MovieItem } from '../../interfaces/main';
import { MoviesState } from '../../interfaces/state';
import { fetchMovieById } from '../../actions/movies';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MovieRating } from '../MovieRating';
import  SameGenre from '../SameGenre';

interface ComponentProps extends RouteComponentProps<any> {
    movie: MovieItem;
    fetchMovie:(id: string) => void;

}

interface ComponentState {}

class MovieDetailsInfo extends React.Component<ComponentProps, ComponentState> {

    public componentDidMount() {
        const {movie, fetchMovie, match } = this.props;
        console.log(this.props);
        fetchMovie(match.params.id);
    }

    public render() {
        const movie = this.props.movie ? this.props.movie : {} as MovieItem; 
        return ( Object.keys(movie).length ?
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-img-container">
                            <img className="card-img" src={movie.poster_path}/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card card-details">
                            <div className="card-body">
                                <h4 className="card-title text-primary d-inline-block mr-4">{movie.title}</h4>
                                <MovieRating rating={movie.vote_average} />
                                <p className="card-text">{movie.tagline}</p>
                                <div className="runtime-info d-inline-block font-weight-bold mr-4 mb-2">
                                    {movie.release_date ? movie.release_date.split('-')[0]: ''}
                                </div>
                                <div className="runtime-info d-inline-block font-weight-bold mr-4 mb-2">
                                    {movie.runtime + 'min'}
                                </div>
                                <p className="card-text">
                                    {movie.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        : null)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsInfo))