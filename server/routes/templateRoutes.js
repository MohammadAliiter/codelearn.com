// routes/templateRoutes.js

const express = require('express');
const { getAllTemplates, createTemplate, updateTemplate, deleteTemplate } = require('../controllers/templateController');

const router = express.Router();

// Get all templates
router.get('/templates', getAllTemplates);

// Create a new template
router.post('/templates', createTemplate);

// Update a template
router.put('/templates/:id', updateTemplate);

// Delete a template
router.delete('/templates/:id', deleteTemplate);

module.exports = router;
