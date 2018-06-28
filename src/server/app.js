import express from "express";
import path from "path";
import {App} from '../components/App'
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';

const app = express();

app.use( express.static(__dirname + '/dist'));
// app.use( express.static('dist'));

app.get( "*", (req, res) => {
    const context = {};

    const reactDom = renderToString(
        <App   
            context={context}
            location={req.url}
            Router={StaticRouter}/>);

    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.send( htmlTemplate( reactDom ) );
});

app.listen(2048, () => console.log('Express is listening on port 2048...'));

function htmlTemplate( reactDom ) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Server Side Rendering</title>
      </head>
      <body>
          <div id="app">${reactDom}</div>
          <script src="bundle.js"></script>
      </body>
    </html>
    `;
}