var home = require('../controllers/home'),
    articles = require('../controllers/articles');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/articles', articles.index);
    app.get('/articles/:id', articles.getById);
    app.post('/articles/new', articles.add);
    app.put('/articles/:id/edit', articles.update);
    app.delete('/articles/:id', articles.delete);
};
