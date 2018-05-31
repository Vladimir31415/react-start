import React, { SyntheticEvent } from "react";
import './styles.scss';
import { searchBy } from "../../interfaces/main";
import { connect, dispatch } from "react-redux";
import { MoviesState } from "../../interfaces/state";
import { setSearchString, fetchMovies } from "../../actions/movies";
import { SET_SEARCH_STRING } from "../../actions/types";
import SearchBy from "../SearchBy";

interface ComponentProps {
    search: string;
    fetchMovies:() => void;
    setSearchString: (search:string) => void;
}

interface ComponentState {}

class Search extends React.Component<ComponentProps, ComponentState> {  

    public fetchMovies() {
        this.props.fetchMovies();
    }

    public setSearchString(event) {
        event.persist();
        this.props.setSearchString(event.target.value);
    }

    public handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.fetchMovies()
        }
    }

    public render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-12">
                        <label htmlFor="movie-search" className="font-weight-bold">FIND YOUR MOVIE</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="movie-search"
                                onKeyPress={this.handleKeyPress.bind(this)}
                                defaultValue={this.props.search} 
                                onChange={this.setSearchString.bind(this)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-sm-6 filter-block">
                            <label className="d-inline-block mr-1">SEARCH BY</label>
                            <SearchBy/>
                        </div>
                        <div className="col-sm-6 text-right">
                            <button onClick={this.fetchMovies.bind(this)} type="button" className="btn btn-primary px-5">SEARCH</button>
                        </div>
                </div>
            </React.Fragment>        
    )}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        setSearchString: (search: string) => dispatch(setSearchString(search))
    }
}

export default connect(null, mapDispatchToProps)(Search);