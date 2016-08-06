
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.text('firstname');
    table.text('lastname');
    table.text('phone')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');  
};
