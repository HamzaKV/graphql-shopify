const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const graphQlBuilder = require('objection-graphql').builder;
const execShopifySeed = require('./services/shopify');

execShopifySeed();

const Products = require('./models/products');
const ProductVariants = require('./models/product-variants');

const models = [Products, ProductVariants];

const graphQlSchema = graphQlBuilder().allModels(models).build();
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    graphiql: true,
}));

module.exports = app;