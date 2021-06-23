const Knex = require('knex');
const { Model } = require('objection');
const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE
} = require('../constants/config');

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

(async () => {
    const version = await knex.raw('SELECT VERSION()');
    console.log('DB Config', `PSQL: ${version.rows[0].version}`);
})();

module.exports = knex;