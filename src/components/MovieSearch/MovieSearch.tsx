import React from "react";
import {MovieSearchControl} from './MovieSearchControl';
import {MovieSearchResults} from './MovieSearchResults'
import {Footer} from '../Footer';
import { MovieCollection, MovieItem } from "../../interfaces/main.interface";
import { fetch2 } from "../../helpers/fetch";

interface ComponentState {
	collection: Array<MovieItem[]>
}

export class MovieSearch extends React.Component<any, ComponentState> {
	public columns = 3; 
    public collection: MovieCollection;
    public promise$: Promise<MovieCollection>;
    constructor(props:any) {
		super(props);
		this.state = {
			collection: []
		}
        this.requestData();
    }

    public requestData() {
        fetch2('http://react-cdp-api.herokuapp.com/movies', {queryParams:{search:'dead', searchBy:'title'}})
            .then((res: Response) => res.json())
            .then((collection: MovieCollection) => {
				const data = this.divideIntoColumns(collection.data, this.columns);
				console.log(data);

                this.setState({collection: data});
            })
	}
	
    render() {
        return (
			<React.Fragment>	
				<MovieSearchControl/>			
				<MovieSearchResults itemRows={this.state.collection}/>	
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