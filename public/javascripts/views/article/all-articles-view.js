define([
    'text!templates/articles/all-articles-template.html',
    'javascripts/views/article/edit-article-view',
    'javascripts/views/article/article-view',
    'javascripts/views/article/new-article-view'

], function (ArticleTemplate, EditArticleView, ArticleView, NewArticleView) {
    var AllArticlesView = Backbone.View.extend({
        initialize: function (options) {
            this.data = options.data;
            this.$el = options.el;
            this.controller = options.controller;
            this.render();
        },

        events: {
            'click .new': 'newArticle',
            'click .edit': 'editArticle',
            'click .delete': 'removeArticle',
            'click .show': 'showArticle'
        },

        newArticle: function (event) {

//            new NewArticleView();
//            return false;
        },

        editArticle: function (model) {
            var id = this.$el.find("table tr td input:checked").eq(0).closest("tr").data("id");
            model = this.collection.get(id);
            new EditArticleView({model: model});
            return false;
        },

        removeArticle: function (model) {
            var id = this.$el.find("table tr td input:checked").eq(0).closest("tr").data("id");
            model = this.collection.get(id);
            model.destroy({
                wait: true,
                success: function () {
                },
                error: function (model, res) {
                }
            });
        },

        showArticle: function (event) {
            event.preventDefault();
            var id = $(event.target).data("id");
            this.controller.showArticle(id);
        },

        render: function () {
            this.$el.html(_.template(ArticleTemplate, {articles: this.data}));
            return this;
        }
    });

    return AllArticlesView;

});