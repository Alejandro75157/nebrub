define([
    'text!templates/articles/new-article-template.html',
    'javascripts/models/article-model'
], function (NewArticleTemplate, ArticleModel) {

    var NewArticleView = Backbone.View.extend({
        el: '#content-holder',
        template: _.template(NewArticleTemplate),
        initialize: function (options) {
            this.model = new ArticleModel();
            this.render();
        },
        events: {
            'click .save': 'saveArticle'
        },

        saveArticle: function(options){
            createData = {
                title: this.$el.find('#title').val(),
                body: this.$el.find('#body').val()
            };
            this.model.save(createData,{
                success: function (model, response) {
                },
                error: function (model, xhr) {
                    alert('Article created ERROR ' );
                    console.log(model);
                }
            })
        },

        render: function(options){
            this.$el.html(this.template());
            return this;
        }
    });
    return NewArticleView;
});