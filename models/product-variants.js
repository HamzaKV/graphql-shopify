const { Model } = require('objection');

class Variants extends Model {
    static get tableName() { return 'variants'; }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                barcode: { type: 'string' },
            }
        };
    }

    static get relationMappings() {
        const Products = require('./products');

        return {
            product: {
                relation: Model.HasManyRelation,
                modelClass: Products,
                join: {
                    from: 'products.id',
                    to: 'variants.product_id'
                }
            }
        };
    }
}

module.exports = Variants;