import * as ReactDOM from "react-dom";
import {Helloer} from "./components/Helloer/Helloer";
import * as React from 'react'

console.log('Starting with Webpack 4');

ReactDOM.render(
    <Helloer />,
    document.getElementById('app')
)