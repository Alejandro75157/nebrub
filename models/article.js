var bookshelf = require('../config/orm');
var Model = bookshelf.Model.extend({
    tableName: 'articles',
    hasTimestamps: true
});

exports.model = Model;

exports.getAll = function () {
    _func();
    return new Model().fetchAll();
};

function _func () {
    console.log("abracadabra");
}