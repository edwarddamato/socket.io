'use strict';

//1
var http = require('http');
var express = require('express');
var path = require('path');
var react = require('react');
var reactDom = require('react-dom');
var reactDomServer = require('react-dom/server');
var reactRouter = require('react-router');
var routes = require('./../app/config/routes.js');
var babel = require('babel-core/register')({
    presets: ['es2015', 'react']
});

// import { Server } from 'http';
// import Express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import routes from './app/config/routes.js';

function start() {
    var app = express();
    var server = new Server(app);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/../app/views'));
    app.set('port', process.env.PORT || 1337);

    app.use('/pub', express.static(__dirname + '/../pub'));

    app.get('*', function (req, res) {
        match({ routes: routes, location: req.url }, function (err, redirectLocation, renderProps) {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            // generate the React markup for the current route
            var markup = void 0;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(React.createElement(RouterContext, renderProps));
            } else {
                // otherwise we can render a 404 page
                //markup = renderToString(<NotFoundPage/>);
                res.status(404);
            }

            // render the index template with the embedded React markup
            return res.render('index', { markup: markup });
        });
    });

    server.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
};

module.exports.start = start;
