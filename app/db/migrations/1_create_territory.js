async function up(knex) {
  await knex.schema.createTableIfNotExists("territory", (table) => {
    table.increments('id').primary();
    table.string("name");
    table.string("area");
    table.string("painted_area");
    table.jsonb("start", 64);
    table.jsonb("end", 64);
    table.timestamps();
  });
};

async function down(knex) {
  await knex.schema.dropTableIfExists("territory");
};

module.exports = { down, up };
