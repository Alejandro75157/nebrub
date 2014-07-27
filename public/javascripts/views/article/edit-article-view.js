define([
    'text!templates/articles/edit-article-template.html',
    'javascripts/models/article-model'
], function (EditArticleTemplate, ArticleModel) {

    var EditArticleView = Backbone.View.extend({
        el: '#content-holder',
        template: _.template(EditArticleTemplate),
        initialize: function (options) {
            this.model = new ArticleModel();
            this.render();
        },
        events: {
            'click .update': 'updateArticle'
        },

        updateArticle: function(options){
            updateData = {
                title: this.$el.find('#title').val(),
                body: this.$el.find('#body').val()
            };
            this.model.save(updateData,{
                success: function (model, response) {
                },
                error: function (model, xhr) {
                    alert('Article updated ERROR ' );
                    console.log(model);
                }
            })
        },

        render: function(options){
            this.$el.html(this.template());
            return this;
        }
    });
    return EditArticleView;
});
