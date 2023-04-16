// app.js
require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// Routes
const productRoutes = require('./product-catelog/routes/product-routes');

// Routes middleware
app.use('/api/products', productRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
