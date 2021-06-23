const { Model } = require('objection');

class ProductsModel extends Model {
    static get tableName() { return 'products'; }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                status: { type: 'string' },
            }
        };
    }
}

module.exports = ProductsModel;