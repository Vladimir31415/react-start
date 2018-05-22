import React from "react";
import './styles.scss';

export class MovieCard extends React.Component {
    render(){ 
        return (
            <React.Fragment>
                <div className="card">
                    <img className="card-img-top" src="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <div className="card-title text-uppercase font-weight-bold">
                            Guardians of the Galaxy Vol. 3
                        </div>
                        <div className="card-text">
                            <small className="float-right border border-secondary px-1">2020</small>
                            <p className="card-subtitle text-muted">Action, Adventure</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}