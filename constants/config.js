const config = {
    DATABASE_HOST: 'localhost',
    DATABASE_PORT: '5432',
    DATABASE_USER: 'postgres',
    DATABASE_PASSWORD: 'root',
    DATABASE: 'shopifygraphql',
    SHOPIFY: { 
        store: '',
        key: '',
        password: '',
        secret: ''
    },
    MAX_FETCH_TIME: 4000
};

module.exports = config;