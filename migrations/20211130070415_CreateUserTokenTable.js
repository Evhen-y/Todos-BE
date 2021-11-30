
exports.up = function (knex) {
    return knex.schema
      .createTable('user_tokens', (table) => {
        
        table.increments();
        
        table.integer("user_id")
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete('CASCADE')
          .index();
  
        table.string("token").notNullable();

        table.boolean('is_active')
         .notNullable()
         .defaultTo(true);
  
      })
  };
      
  exports.down = function (knex) {
    return knex.schema
      .dropTable("user_tokens")
  };