// controllers/templateController.js

const Template = require('../models/Template');

// Get all templates
exports.getAllTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create a new template
exports.createTemplate = async (req, res) => {
  const { title, description, price, images } = req.body;
  try {
    const newTemplate = new Template({
      title,
      description,
      price,
      images,
    });
    const savedTemplate = await newTemplate.save();
    res.status(201).json(savedTemplate);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update a template by ID
exports.updateTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTemplate = await Template.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTemplate) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(updatedTemplate);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a template by ID
exports.deleteTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTemplate = await Template.findByIdAndDelete(id);
    if (!deletedTemplate) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json({ message: 'Template deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
