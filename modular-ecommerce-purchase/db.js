const { Pool } = require('pg');

// Database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shoppingcart',
    password: '.',
    port: 5432,
});

module.exports = pool;