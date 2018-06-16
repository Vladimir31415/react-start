import express from "express";
import path from "path";
import {App} from './components/App/index.tsx'
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const jsx = ( <App /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Server Side Rendering</title>
      </head>
      <body>
          <div id="app">${reactDom}</div>
      </body>
    </html>
    `;
}