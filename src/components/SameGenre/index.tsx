import './styles.scss'
import React from 'react';
import {connect} from 'react-redux';
import { divideIntoColumns } from '../../helpers/columnDivider';
import { MoviesState } from '../../interfaces/state';
import { MovieSearchResults } from '../MovieSearchResults';
import { MoviesCollection, MovieItem } from '../../interfaces/main';
import { SameGenreToolbar } from '../SameGenreToolbar';
import { Spinner } from '../Spinner';

interface ComponentProps {
    sameGenreList: MovieItem[][];
    currentItem: MovieItem;
}

interface ComponentState {
    genre: string;
}

class SameGenre extends React.Component<ComponentProps, ComponentState> {

    public render() {
        const {sameGenreList, currentItem} = this.props;
        return( sameGenreList.length ?
            <React.Fragment>
                <SameGenreToolbar genre={this.props.currentItem.genres[0]}/>
                <MovieSearchResults itemRows={this.props.sameGenreList}/>
            </React.Fragment>
        : <Spinner/>)
    }
}

const mapStateToProps = (state:MoviesState) => { return {
    sameGenreList: state.movies.currentItem.sameGenreCollection ? 
        divideIntoColumns(state.movies.currentItem.sameGenreCollection.data, 3) : [],
    currentItem: state.movies.currentItem
}}

export default connect(mapStateToProps, null)(SameGenre); 