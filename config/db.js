/*
 * Here we are initializing and caching PostreSQL driver.
 * */
var pg = require('pg');

module.exports = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '1',
        database: 'backbone_db',
        charset: 'utf8'
    }
});