define([],function () {
    var ArticleModel = Backbone.Model.extend({
        urlRoot:  "/articles"
    });
    return ArticleModel;
});
