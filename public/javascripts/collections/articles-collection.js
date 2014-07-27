define([
        "javascripts/models/article-model"
    ],
    function (ArticleModel) {
        var ArticleCollection = Backbone.Collection.extend({
            model: ArticleModel,
            url: "/articles"
        });
        return ArticleCollection;
    });
