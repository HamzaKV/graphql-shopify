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

    static get relationMappings() {
        const ProductVariants = require('./product-variants');

        return {
            variants: {
                relation: Model.HasManyRelation,
                modelClass: ProductVariants,
                join: {
                    from: 'products.id',
                    to: 'variants.product_id'
                }
            }
        };
    }
}

module.exports = ProductsModel;