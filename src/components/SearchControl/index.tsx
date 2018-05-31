import React, { SyntheticEvent } from "react";
import { MoviesState } from "../../interfaces/state";
import { searchBy } from "../../interfaces/main";
import { setSearchBy, setSearchString, fetchMovies } from "../../actions/movies";
import {connect} from 'react-redux';

interface ComponentProps {
   setSearchString: (string) => void;
   fetchMovies: () => void;
   search: string;
}

interface ComponentState {}

class SearchControl extends React.Component<ComponentProps, ComponentState> {
    
    public handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.props.fetchMovies();
        }
    }

    public setSearchString(event) {
        event.persist();
        this.props.setSearchString(event.target.value);
    }

    public render() {
        return (
            <input type="text" className="form-control" id="movie-search"
                    onKeyPress={this.handleKeyPress.bind(this)}
                    defaultValue={this.props.search} 
                    onChange={this.setSearchString.bind(this)}/>
        )
    }
}

const mapStateToProps = (state:MoviesState) => {
    return {
        search: state.movies.filter.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchString: (search: string) => dispatch(setSearchString(search)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl)