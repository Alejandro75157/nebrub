module.exports = function (knex, Promise) {

        function create() {
                Promise.all([

                        knex.schema.hasTable('articles').then(function(exists) {
                          if (!exists) {
                            return knex.schema.createTable('articles', function(t) {
                              t.increments('id').primary();
                              t.string('title', 100);
                              t.text('body');
                              t.timestamps();
                            }).then(function () {
                                console.log('Articles Table is Created!')
                            });
                          }
                        })

                ])

        }
    return {
        create: create
    }
};