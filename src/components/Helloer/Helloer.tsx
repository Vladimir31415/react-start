import * as React from "react";
import './Helloer.scss';

console.log('This is Helloer');

export class Helloer extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>This is a simple component</h1>
                <p className="paragraph">just for demo purpose</p>    
            </div>
        );
    }
}