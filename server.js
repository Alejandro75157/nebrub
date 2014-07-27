#!/usr/bin/env node
/*
* Here we are loading application and starting Node.js server
* */
var app = require('./app'),
    debug = require('debug')('myapp');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});