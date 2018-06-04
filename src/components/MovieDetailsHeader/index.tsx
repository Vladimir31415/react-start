import React from "react";
import './styles.scss';
import { NetflixLabel } from "../NetflixLabel";
import { NavLink } from "react-router-dom";

export class MovieDetailsHeader extends React.Component {
    public render() {
        return (
            <div className="row header">
                <div className="col-sm-6">
                    <NetflixLabel/>    
                </div>
                <div className="col-sm-6 text-right">
                    <NavLink to="/search">
                        <button className="btn">Search</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}