async function up(knex) {
  await knex.schema.createTableIfNotExists("territory", (table) => {
    table.increments('id').primary();
    table.string("name").notNull();
    table.string("area").notNull();
    table.string("painted_area").defaultTo("0");
    table.jsonb("start", 64).notNull();
    table.jsonb("end", 64).notNull();
    table.timestamps();
  });
};

async function down(knex) {
  await knex.schema.dropTableIfExists("territory");
};

module.exports = { down, up };
