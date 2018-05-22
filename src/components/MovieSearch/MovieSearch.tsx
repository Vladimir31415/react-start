import React from "react";
import {MovieSearchControl} from './MovieSearchControl';
import {MovieSearchResults} from './MovieSearchResults'
import {Footer} from '../Footer';

export class MovieSearch extends React.Component {
    render() {
        return (
			  <React.Fragment>	
					<MovieSearchControl/>		
					<MovieSearchResults/>	
					<Footer/>
				</React.Fragment>
        );
    }
}