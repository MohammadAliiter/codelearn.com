// models/Component.js
const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  title: { type: String, required: true },
  description: { type: String },
  code: { type: String, required: true },
});

module.exports = mongoose.model('Component', ComponentSchema);
