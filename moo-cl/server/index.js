//1
var express = require('express');
var path = require('path');
var react = require('react');
var reactDom = require('react-dom');
var reactDomServer = require('react-dom/server');
var routes = require('./../app/config/routes.js')

import { Server } from 'http';
// import Express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
// import routes from './app/config/routes.js';

function start() {
    const app = express();
    const server = new Server(app);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/../app/views'));
    app.set('port', process.env.PORT || 1337);

    app.use('/pub', express.static(__dirname + '/../pub'));

    app.get('*', (req, res) => {
        match(
            { routes, location: req.url },
            (err, redirectLocation, renderProps) => {

                // in case of error display the error message
                if (err) {
                    return res.status(500).send(err.message);
                }

                // in case of redirect propagate the redirect to the browser
                if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
                }

                // generate the React markup for the current route
                let markup;
                if (renderProps) {
                    // if the current route matched we have renderProps
                    markup = renderToString(<RouterContext {...renderProps}/>);
                } else {
                    // otherwise we can render a 404 page
                    //markup = renderToString(<NotFoundPage/>);
                    res.status(404);
                }

                // render the index template with the embedded React markup
                return res.render('layout', { markup });
            }
        );
    });

    server.listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
};


start();

//module.exports.start = start;