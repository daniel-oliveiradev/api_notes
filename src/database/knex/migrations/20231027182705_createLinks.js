
exports.up = knex => knex.schema.createTable("links", table =>{
  table.increments("id");
  table.text("url").notNullable();

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");

});

exports.down = knex => knex.schema.dropTable("links");