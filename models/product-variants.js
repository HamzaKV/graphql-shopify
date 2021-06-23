const { Model } = require('objection');

class Variants extends Model {
    static get tableName() { return 'variants'; }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                barcode: { type: 'string' },
                product_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const Products = require('./products');

        return {
            product: {
                relation: Model.BelongsToOneRelation,
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