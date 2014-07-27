'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }

    },
    paths: {
        jquery: './libs/jquery-2.1.0.min.map',
        underscore: './libs/underscore_1.6.0.min',
        backbone: './libs/backbone-min.map.1.1.2',
        text: './libs/text'
    }
});

require(['jquery', 'backbone', './router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});