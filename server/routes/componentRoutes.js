// routes/componentRoutes.js
const express = require('express');
const { addComponent, getComponents,getUniqueTypes } = require('../Controllers/componentController');
const router = express.Router();

// Route to add a new component
router.post('/component', addComponent);

// Route to fetch components
router.get('/components', getComponents);
router.get('/component-types', getUniqueTypes);

module.exports = router;
