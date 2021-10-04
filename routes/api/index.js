const express = require('express');
const router = express.Router();

// Router files
const customerRoute = require('./customer');
const productsRoute = require('./products/products');
const categoriesRoute = require('./products/categories');
const bestSellersRoute = require('./products/bestSellers');

// Routes
router.use('/customer', customerRoute);
router.use('/products', productsRoute);
router.use('/categories', categoriesRoute);
router.use('/best-sellers', bestSellersRoute);

// Send all available endpoints as JSON object
router.get('/', (req, res) => {
  res.json({
    message: 'all endpoints are available through /api/ route',
    endpoints: {
      customer: {
        route: '/api/customers',
        endpoints: {
          getCustomer: 'GET api/customers/:customer',
          registerCustomer: 'POST api/customers/',
        },
      },
      products: {
        route: '/api/products',
        endpoints: {
          getAllProducts: 'GET api/products/',
          getById: 'GET api/products/:id',
          getAllCategories: 'GET api/products/categories',
          getAllByCategory: 'GET api/products/categories/:category',
          getBestSellers: 'GET api/products/bestsellers',
          addProduct: 'POST api/products/',
          updateProduct: 'PUT api/products/:id',
          deleteProduct: 'DELETE api/products/:id',
        },
      },
    },
  });
});

module.exports = router;
