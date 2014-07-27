/*
* Here we are configuring:
* - Database schema load
* - Template engine
* - Express middleware
* - Application routes
* - 404, 500 policy
* */

var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    knex = require('./config/db'),
    bluebird = require('bluebird'),
    routes = require('./app/routes'),
    app = express();

// Load database schema
var schema = require('./config/schema')(knex, bluebird);
schema.create();

// Configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware for Express 4
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json({strict: false, inflate: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes.initialize(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;