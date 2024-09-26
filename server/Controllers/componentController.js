// controllers/componentController.js
const Component = require('../models/Component');

// Controller to add a new component
const addComponent = async (req, res) => {
  try {
    const { type, title, description, code } = req.body;
    const newComponent = new Component({ type, title, description, code });
    await newComponent.save();
    res.status(201).json({ message: `${type} added successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller to fetch components by type
const getComponents = async (req, res) => {
  try {
    const { type } = req.query; // Fetching type from query parameters
    const components = await Component.find(type ? { type } : {});
    res.status(200).json(components);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
const getUniqueTypes = async (req, res) => {
    try {
      const components = await Component.find({});
      const uniqueTypes = [...new Set(components.map(component => component.type))];
      res.status(200).json(uniqueTypes);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

module.exports = {
  addComponent,
  getComponents,
  getUniqueTypes,
};
