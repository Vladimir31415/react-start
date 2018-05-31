import React, { Component } from "react";
import "./styles.scss";
import { MovieCard } from "../MovieCard";
import { MovieItem } from "../../interfaces/main";

interface ComponentProps {
    itemRows: Array<MovieItem[]>
}

export class MovieSearchResults extends React.Component<ComponentProps, any> {

    constructor(props) {
        super(props);
    }

    public render() {
        const movieCards = this.props.itemRows.map((row, key) => {
            const col1 = row[0] ? <div className="col-sm-4">
                <MovieCard item={row[0]}/>
            </div> : null;
            const col2 = row[1] ? <div className="col-sm-4">
                <MovieCard item={row[1]}/>
            </div> : null;
            const col3 = row[2] ? <div className="col-sm-4">
                <MovieCard item={row[2]}/>
            </div> : null;
            return (
                <div className="row mb-3" key={key}>
                    {col1}{col2}{col3}
                </div>)
        })
        return (
            <section className="search-results p-4">
                <div className="container">
                    {movieCards}
                </div>
            </section>
        )
    }
}