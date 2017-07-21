"use strict";

const db = {};

module.exports = {
  get: (table, id) => {
    return new Promise((resolve, reject) => {
      resolve(db[table][parseInt(id)]);
    });
  },

  list: (table) => {
    return new Promise((resolve, reject) => {
      resolve(db[table] || []);
    });
  },

  remove: (table, id) => {
    return new Promise((resolve, reject) => {
      delete db[table][parseInt(id)];
      resolve();
    });
  },

  set: (table, data) => {
    if (!db[table]) {
      db[table] = [];
    }

    let length = db[table].length;

    data.id = length;
    db[table].push(data);

    return module.exports.get(table, length);
  },

  update: (table, id, data) => {
    data.id = id;
    db.table[parseInt(id)] = data;
    return module.exports.get(table, id);
  },
};
