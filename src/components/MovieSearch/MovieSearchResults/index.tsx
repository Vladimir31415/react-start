import React from "react";
import "./styles.scss";
import { MovieCard } from "../MovieCard";
import { MovieCollection, MovieItem } from "../../../interfaces/main.interface";

export class MovieSearchResults extends React.Component {
    public columns = 3; 
    public collection: MovieCollection;
    public promise$: Promise<MovieCollection>;
    constructor(props:any) {
        super(props);
        this.requestData();
    }

    public requestData() {
        fetch('http://react-cdp-api.herokuapp.com/movies')
            .then((res: Response) => res.json())
            .then((collection: MovieCollection) => {
                console.log(this.divideIntoColumns(collection.data, this.columns))
                // this.setState({collection: data})
            })
    }

    public render() {
        return (
            <React.Fragment>
                <section className="search-results p-4">
                    <div className="container">
                        {
                            <div className="row">
                                <div className="col-sm-4">
                                    <MovieCard/>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </React.Fragment>
        )
    }

    private divideIntoColumns(data: MovieItem[], cols: number) {
        let arData = [];
        const rows = data.length / cols;
        for(let row = 1; row <= rows; row=row+cols-1) {
            arData.push(data.filter((val, ind) => ind < row*cols));
        } 
        return arData;
    }
}