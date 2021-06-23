const Knex = require('knex');

const { Model } = require('objection');

const DATABASE_HOST = 'localhost';
const DATABASE_PORT = '5432';
const DATABASE_USER = 'postgres';
const DATABASE_PASSWORD = 'root';
const DATABASE = 'shopifygraphql';

const knex = Knex({
    client: 'pg',
    connection: {
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE,
    },
});

Model.knex(knex);

module.exports = knex;