import React from "react";
import {Footer} from '../Footer';
import { MovieCollection, MovieItem } from "../../interfaces/main";
import { fetch2 } from "../../helpers/fetch";
import { MovieSearchControl } from "../MovieSearchControl";
import { MovieSearchResults } from "../MovieSearchResults";
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions/movies";
import store from "../../store";
import { MoviesState } from "../../interfaces/state";

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
        this.requestData();
    }
    
    public shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        if(nextProps.moviesList != this.props.moviesList) {
            this.processItems(nextProps.moviesList);
            return true;
        }
        return false;
    }

    public requestData() {
        this.props.fetchMovies()
            // .then((collection) => {
            //     console.log(collection);
                
            //     this.processItems(collection)
            // });     
    }

    public processItems(collection: MovieItem[]) {
        const data = this.divideIntoColumns(collection, this.columns);
        this.setState({
            columnedData:data 
        })
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

const mapStateToProps = (state:MoviesState) => { return {
    moviesList: state.movies.collection.data
}}


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch); 