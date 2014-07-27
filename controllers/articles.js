pp/*
 * All corresponding CRUD methods for interaction with Article model
 * */
var ArticleModule = require('../models/article');
var Article = ArticleModule.model;

module.exports = {
    index: function (req, res) {
        ArticleModule.getAll()
            .then(function (articles) {
                res.send(articles.toJSON());
            }).catch(function (error) {
                console.log(error);
                res.send('An error occured');
            });
    },
    getById: function (req, res) {
        Article.forge({ id: req.params.id }).fetch()
            .then(function (article) {
            res.send(article.toJSON());
        }).catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
    },
    add: function (req, res) {
        Article.forge(req.body).save().then(function (article) {
            res.send(201, article);
        }).catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
    },
    update: function (req, res) {
        Article.forge({ id: req.params.id })
            .set(req.body).save()
            .then(function (article) {
            res.send(article.toJSON());
        }).catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
    },
    delete: function (req, res) {
        Article.forge({ id: req.params.id }).destroy()
            .then(function () {
                res.send(204);
            }).catch(function (error) {
                console.log(error);
                res.send('An error occured');
            });
    }
};