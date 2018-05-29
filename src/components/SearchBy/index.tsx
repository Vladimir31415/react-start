import React from "react";
import './styles.scss';
import { sTitle, sGenres } from "../../interfaces/main";

interface ComponentProps {
    onChange: Function;
    by: sTitle | sGenres;
}

interface ComponentState {
    searchBy: sTitle | sGenres;
}

export class SearchBy extends React.Component<ComponentProps, ComponentState> {
    private readonly sTITLE = 'title';
    private readonly sGENRES = 'genres';
    constructor(props:ComponentProps) {
        super(props);
        this.state = {
            searchBy: this.sTITLE      
        }
    }

    public updateSearchBy(value) {
        console.log(value);
        
        this.setState({searchBy: value});
        this.props.onChange(value);
    }

    public render() {
        return (
            <React.Fragment>
                <label className="d-inline-block mr-1">SEARCH BY</label>
                <div className=" d-inline-block btn-group-toggle search-by" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary active mx-1 px-4" 
                        onClick={this.updateSearchBy.bind(this, this.sTITLE)}>
                        <input type="radio" name="searchBy" value={this.sTITLE} 
                            checked={this.state.searchBy === this.sTITLE} /> TITLE
                    </label> 
                    <label className="btn btn-sm btn-primary mx-1 px-4"
                        onClick={this.updateSearchBy.bind(this, this.sGENRES)}>
                        <input type="radio" name="searchBy" value={this.sGENRES} 
                            checked={this.state.searchBy === this.sGENRES}/> GENRE
                    </label>
                </div>
            </React.Fragment>
        )
    }
}