"use strict";
const { knex } = require('./db/db');

module.exports = {
  get: (table, id) => {
    return knex(table).where('id', id);
  },

  list: (table) => {
    return knex(table);
  },

  remove: (table, id) => {
    return knex(table).where('id', id).del();
  },

  set: (table, data) => {
    const now = new Date();

    data.created_at = now;
    data.updated_at = now;

    return knex.insert(data)
          .into(table)
          .returning('id')
          .then(insertedIds => module.exports.get(table, insertedIds[0]));
  },

  update: (table, id, data) => {
    data.updated_at = new Date();

    return knex(table)
          .where('id', '=', id)
          .update(data)
          .returning('id')
          .then(updatedIds => module.exports.get(table, updatedIds[0]));

  },
};
