async function up(knex) {
  await knex.schema.createTableIfNotExists("square", (table) => {
    table.increments('id').primary();
    table.string("x");
    table.string("y");
    table.unique(["x", "y"]);
    table.boolean("painted").defaultTo(false);
    table.timestamps();
  });
};

async function down(knex) {
  await knex.schema.dropTableIfExists("square");
};

module.exports = { down, up };
