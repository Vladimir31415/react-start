import React from "react";
import './styles.scss';
import {connect} from 'react-redux';
import { sortBy, SortByOptions } from "../../interfaces/main";
import { sortByProp, setSortBy } from "../../actions/movies";
import { MoviesState } from "../../interfaces/state";

interface ComponentProps {
    sortBy: (by: sortBy) => void;
    by: sortBy
}

interface ComponentState {}

export class SortBy extends React.Component<ComponentProps, ComponentState> {

    public sortByProp(by: sortBy) {
        this.props.sortBy(by);
    }
   
    public render() {
        return (
            <div className="sortBy">
                <label>Sort by: </label>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className={"btn " + (this.props.by === SortByOptions.Release ? 'active' : '')}
                        onClick={this.sortByProp.bind(this, 'release_date')}>
                        <input type="radio" name="sortBy" value="release_date"/> Release date
                    </label>
                    <label className={"btn " + (this.props.by === SortByOptions.Rating ? 'active' : '')}
                        onClick={this.sortByProp.bind(this, 'vote_average')}>
                        <input type="radio" name="sortBy" value="vote_average" 
                        onChange={this.sortByProp.bind(this)}/> Rating
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: MoviesState) => {
    return {
        by: state.movies.filter.sortBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortBy: (by: sortBy) => dispatch(sortByProp(by)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)