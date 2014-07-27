define([
    'text!templates/articles/article-template.html'
], function (ArticleTemplate) {
    var ArticleView = Backbone.View.extend({
        initialize: function (options) {
            this.$el = options.el;
            this.model = options.model;
            this.render();
        },

        render: function () {
            this.$el.html(_.template(ArticleTemplate, {article: this.model.toJSON()}));
            return this;
        }
    });
    return ArticleView;
});
