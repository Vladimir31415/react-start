import React from "react";
import './styles.scss';
import { MovieItem } from "../../interfaces/main";
import { MovieGenre } from "../MovieGenre";

interface ComponentProps {
    item: MovieItem
}

export class MovieCard extends React.Component<ComponentProps, any> {
    render(){
        const item: MovieItem = this.props.item; 
        return (
            <React.Fragment>
                <div className="card">
                    <img className="card-img-top" src={item.poster_path} alt="Card image cap" />
                    <div className="card-body">
                        <div className="card-title text-uppercase font-weight-bold">
                           {item.title}
                        </div>
                        <div className="card-text">
                            <small className="float-right border border-secondary px-1">{item.release_date.split('-')[0]}</small>
                            <MovieGenre genres={item.genres}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}