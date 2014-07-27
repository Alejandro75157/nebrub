define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        $content = $("#content-holder");

    return Backbone.Router.extend({

        routes: {
            "": "allArticles",
            "article/new": "newArticle",
            "article/:id/edit": "editArticle",
            "article/:id": "showArticle"
        },

        initialize: function () {
            this.data = {};
        },

        allArticles: function () {
            var _this = this;
            _this.getArticlesFromCache(function (articles) {
                require(["javascripts/views/article/all-articles-view"],
                    function (HomeView) {
                        new HomeView({controller: _this, el: $content, data: articles});
                    });
            });
        },

        newArticle: function (id) {
            console.log(id);
        },

        editArticle: function () {

        },

        showArticle: function (id) {
            var _this = this;
            _this.getArticlesFromCache(function (articles) {
                require(["javascripts/views/article/article-view",
                        "javascripts/collections/articles-collection"],
                    function (ArticleView, ArticlesCollection) {
                        var collection = new ArticlesCollection(articles);
                        var article = collection.get(id);
                        new ArticleView({el: $content, model: article});
                        _this.navigate('/article/' + id);
                    });
            });
        },

        getArticlesFromCache: function (callback) {
            var _this = this;
            var articles = this.data.articles;

            var isArticlesLoaded = (typeof articles !== "undefined" && articles !== null);

            if (isArticlesLoaded) {
                callback(articles);
            } else {
                require(["javascripts/collections/articles-collection"],
                    function (ArticlesCollection) {
                        new ArticlesCollection().fetch({
                            success: function (collection, response) {
                                _this.data.articles = response;
                                callback(response);
                            },
                            error: function () {
                                throw new Error("Articles fetch error");
                            }
                        });
                    });
            }
        }
    });

});
