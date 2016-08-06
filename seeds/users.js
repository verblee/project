exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del(),
    knex('users').insert({
      id: 1,
      firstname: 'John', 
      lastname: 'Smith', 
      phone: '8082921010'
    }),
    knex('contacts').del(),
    knex('contacts').insert({
      id:1,
      firstname: 'Alex',
      lastname: 'Chang',
      phone: '8087542941',
      user_id: '1'
    })
  ]);
};