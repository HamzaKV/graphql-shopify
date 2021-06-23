CREATE DATABASE shopifygraphql;

CREATE extension IF NOT EXISTS 'uuid-ossp';

CREATE TABLE products (
    id                           BIGINT        PRIMARY KEY,
    title                        VARCHAR(255),
    status                       VARCHAR(255),
    created_at                   TIMESTAMPTZ   NOT NULL                    DEFAULT NOW(),
    meta_data                    JSON
);

CREATE TABLE variants (
    id                           BIGINT PRIMARY KEY,
    product_id                   BIGINT,
    barcode                      VARCHAR(255),
    FOREIGN KEY (product_id)     REFERENCES    product(id) ON DELETE CASCADE,
    created_at                   TIMESTAMPTZ   NOT NULL                    DEFAULT NOW(),
    meta_data                    JSON
);