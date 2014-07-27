/*
 * Here we are caching Bookshelf namespace
 * */
var knex = require('./db');
module.exports = require('bookshelf')(knex);