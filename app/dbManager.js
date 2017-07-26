"use strict";
const { knex } = require('./db/db');

async function createOrUpdateSquare(data) {
  return getSquare(data.x, data.y).then(foundSquares => update('square', foundSquares[0].id, data))
                                  .catch(err => set('square', data));
};

async function getSquare(x, y) {
  return knex('square').where('x', '=', x).andWhere('y', '=', y);
};

async function get(table, id) {
  return knex(table).where('id', id);
};

async function list(table) {
  return knex(table);
};

async function remove(table, id) {
  return knex(table).where('id', id).del();
};

async function set(table, data) {
  const now = new Date();

  data.created_at = now;
  data.updated_at = now;

  return knex.insert(data)
        .into(table)
        .returning('id')
        .then(insertedIds => module.exports.get(table, insertedIds[0]));
};

async function update(table, id, data) {
  data.updated_at = new Date();

  return knex(table)
        .where('id', '=', id)
        .update(data)
        .returning('id')
        .then(updatedIds => module.exports.get(table, updatedIds[0]));
};

module.exports = { createOrUpdateSquare, getSquare, get, list, remove, set, update };
