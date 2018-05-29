import React, { SyntheticEvent } from "react";
import './styles.scss';
import { sTitle, sGenres } from "../../interfaces/main";
import { SearchBy } from "../SearchBy";
import { connect, dispatch } from "react-redux";
import { MoviesState } from "../../interfaces/state";
import { setSearchString, fetchMovies } from "../../actions/movies";
import { SET_SEARCH_STRING } from "../../actions/types";

interface ComponentProps {
    cbRequest: Function;
    search: string;
    setSearchString: Function;
    dispatch: Function;
}

interface ComponentState {
    searchBy: sTitle | sGenres;
}

class Search extends React.Component<ComponentProps, ComponentState> {  

    constructor(props:ComponentProps) {
        super(props);
        this.state = {
            searchBy: 'title'
        }
    }
    public submit() {
        this.props.cbRequest();
    }

    public updateSearchBy(by: sTitle | sGenres) {
        this.setState({searchBy: by});
    }

    public render() {
        var {dispatch} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                        <div className="col-sm-12">
                                <label htmlFor="movie-search" className="font-weight-bold">FIND YOUR MOVIE</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="movie-search" 
                                        defaultValue={this.props.search} onChange={(e) => {
                                            dispatch(setSearchString(e.target.value))
                                        }}/>
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-sm-6 filter-block">
                            <SearchBy by={this.state.searchBy} onChange={this.updateSearchBy.bind(this)}/>
                        </div>
                        <div className="col-sm-6 text-right">
                            <button onClick={() => dispatch(fetchMovies())} type="button" className="btn btn-primary px-5">SEARCH</button>
                        </div>
                </div>
            </React.Fragment>        
    )}
}

export default connect()(Search);