import React from "react";
import './styles.scss';
import { SearchBy } from "../SearchBy";
import { sGenres, sTitle } from "../../../interfaces/main";

interface ComponentProps {
    cbRequest: Function;
}

interface ComponentState {
    search: string;
    searchBy: sTitle | sGenres;
}

export class Search extends React.Component<ComponentProps, ComponentState> {
    private readonly sTITLE = 'title';
    constructor(props:ComponentProps) {
        super(props);
        this.state = {
            search: '',
            searchBy: this.sTITLE
        }
    }
    public submit() {
        this.props.cbRequest({search: this.state.search, searchBy: this.state.searchBy});
    }

    public updateSearch(event) {
        this.setState({search: event.target.value})
    }
    public updateSearchBy(by: sTitle | sGenres) {
        this.setState({searchBy: by});
    }

    public render() {
        return (
            <React.Fragment>
                <div className="row">
                        <div className="col-sm-12">
                                <label htmlFor="movie-search" className="font-weight-bold">FIND YOUR MOVIE</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="movie-search" 
                                        value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-sm-6 filter-block">
                            <SearchBy by={this.state.searchBy} onChange={this.updateSearchBy.bind(this)}/>
                        </div>
                        <div className="col-sm-6 text-right">
                            <button onClick={this.submit.bind(this)} type="button" className="btn btn-primary px-5">SEARCH</button>
                        </div>
                </div>
            </React.Fragment>        
    )}
}