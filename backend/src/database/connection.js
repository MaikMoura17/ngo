const knex = require('knex');
const configdb = require('../../knexfile');

const connection = knex(configdb.development);

module.exports = connection;