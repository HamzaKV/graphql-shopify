const knex = require('../services/knex');

module.exports = async () => {
    if (!(await knex.schema.hasTable('products'))) {
        await knex.schema.createTable('products', table => {
            table.integer('id').primary();
            table.string('title');
            table.string('status');
        });
    }

    if (!(await knex.schema.hasTable('variants'))) {
        await knex.schema.createTable('variants', table => {
            table.integer('id').primary();
            table.string('barcode');
            table.integer('product_id').references('products.id');
        });
    }
};