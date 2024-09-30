// models/Template.js

const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }], // store image URLs or paths
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
