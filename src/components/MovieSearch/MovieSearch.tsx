import React from "react";
import {Footer} from '../Footer';
import { MovieCollection, MovieItem } from "../../interfaces/main";
import { fetch2 } from "../../helpers/fetch";
import { MovieSearchControl } from "../MovieSearchControl";
import { MovieSearchResults } from "../MovieSearchResults";
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions/movies";
import store from "../../store";

interface ComponentState {
	columnedData: Array<MovieItem[]>
}
class MovieSearch extends React.Component<any, ComponentState> {
	public columns = 3; 
    public collection: MovieCollection;
    constructor(params) {
        super(params);
        this.state = {
            columnedData: []
        }
    }
    
    public componentWillMount() {
        this.requestData();
    }

    public requestData() {
        this.props.fetchMovies()
            .then((collection: MovieCollection) => {
                this.collection = store.getState().movies.collection;
                const data = this.divideIntoColumns(this.collection.data, this.columns);
                this.setState({
                    columnedData:data 
                })
            });     
    }
	
    render() {
        return (
			<React.Fragment>	
				<MovieSearchControl cbRequest={this.requestData.bind(this)}/>			
				<MovieSearchResults itemRows={this.state.columnedData}/>	
				<Footer/>
			</React.Fragment>
        );
	}
	
	private divideIntoColumns(data: MovieItem[], cols: number) {
        let arData: Array<MovieItem[]> = [];
        const rows = data.length / cols;
        for(let row = 0; row < rows; row++) {
            arData.push(data.filter((val, ind) => ind >= row*cols && ind < row*cols+cols));
        } 
        return arData;
    }
}

const mapStateToProps = state => { return {
    moviesList: state.movies.items
}}


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch); 
