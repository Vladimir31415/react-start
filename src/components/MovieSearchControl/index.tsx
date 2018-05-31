import React from "react";
import './styles.scss';
import { NetflixLabel } from "../NetflixLabel";
import Search from '../Search';
import SortBy from "../SortBy";
import Total from "../Total";

interface ComponentProps {}

export class MovieSearchControl extends React.Component<any, any> {
    render() {
        return (
        <React.Fragment>
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
            <div className="container">
                <div className="row status-bar">
                    <div className="col-sm-6">
                        <Total/>
                    </div>
                    <div className="col-sm-6 text-right">
                        <SortBy/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )}
}