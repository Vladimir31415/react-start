import React from "react";
import './styles.scss';
import { Search } from "../Search";
import {NetflixLabel} from '../../NetflixLabel'

export class MovieSearchControl extends React.Component {
    render() {
        return (
        <header className="p-4">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <NetflixLabel/>
                    </div>
                </div>
                <Search/>
            </div>         
        </header>
    )}
}