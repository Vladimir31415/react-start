import React from "react";
import './styles.scss';
import { searchBy, SearchByOptions } from "../../interfaces/main";
import { connect, dispatch } from "react-redux";
import { setSearchBy } from "../../actions/movies";
import { SET_SEARCH_BY } from "../../actions/types";
import { MoviesState } from "../../interfaces/state";

interface ComponentProps {
    setSearchBy: (prop: searchBy) => void;
    searchBy: searchBy
}

interface ComponentState {}

export class SearchBy extends React.Component<ComponentProps, ComponentState> {

    constructor(props:ComponentProps) {
        super(props);
        this.state = {
            searchBy: SearchByOptions.Title      
        }
    }

    public updateSearchBy(value: searchBy) {
        this.props.setSearchBy(value)
    }

    public render() {
        return (
            <React.Fragment>
                <div className=" d-inline-block btn-group-toggle search-by" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary active mx-1 px-4" 
                        onClick={this.updateSearchBy.bind(this, SearchByOptions.Title)}>
                        <input type="radio" name="searchBy" value={SearchByOptions.Title} 
                            defaultChecked={this.props.searchBy === SearchByOptions.Title} /> TITLE
                    </label> 
                    <label className="btn btn-sm btn-primary mx-1 px-4"
                        onClick={this.updateSearchBy.bind(this, SearchByOptions.Genres)}>
                        <input type="radio" name="searchBy" value={SearchByOptions.Genres} 
                            defaultChecked={this.props.searchBy === SearchByOptions.Genres}/> GENRE
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state:MoviesState) => {
    return {
        searchBy: state.movies.filter.searchBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchBy: (prop: searchBy) =>  {
            dispatch(setSearchBy(prop))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBy)