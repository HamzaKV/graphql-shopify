const createSchema = require('../migrations/create-schema');
const fetch = require('./fetch');
const { SHOPIFY } = require('../constants/config');
const Products = require('../models/products');
const ProductVariants = require('../models/product-variants');

module.exports = async () => {
    const { store, key } = SHOPIFY;

    let products = null;
    let variants = null;

    try {
        await createSchema();

        products = (await fetch(
            `https://${store}.myshopify.com/admin/api/2021-04/products.json`, 
            { 
                method: 'GET', 
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': key
                } 
            }
        ))?.products;

        variants = (await fetch(
            `https://${store}.myshopify.com/admin/api/2021-04/products.json`, 
            { 
                method: 'GET', 
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': key
                } 
            }
        )).variants;
    } catch (error) {
        products = require('../constants/ShopifyProduct.json').products;
        variants = require('../constants/ShopifyProductVariant.json').variants;
    } finally {
        for await (const product of products) {
            await Products.query().insert({
                id: product.id,
                title: product.title,
                status: product.status
            });
        }

        for await (const variant of variants) {
            await ProductVariants.query().insert({
                id: variant.id,
                barcode: variant.barcode,
                product_id: variant.product_id
            });
        }
    }
};