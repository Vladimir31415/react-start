import React from "react";
import './styles.scss';
import { NetflixLabel } from "../NetflixLabel";

export class Footer extends React.Component {
    render(){ 
        return (
            <footer className="p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <NetflixLabel/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}