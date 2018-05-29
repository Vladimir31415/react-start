import React from "react";
import './styles.scss';
import { NetflixLabel } from "../NetflixLabel";
import Search from '../Search';


interface ComponentProps {
    cbRequest: Function;
}
export class MovieSearchControl extends React.Component<ComponentProps, any> {
    render() {
        return (
        <header className="p-4">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <NetflixLabel/>
                    </div>
                </div>
                <Search cbRequest={this.props.cbRequest}/>
            </div>         
        </header>
    )}
}