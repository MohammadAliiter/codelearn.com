const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  code: { type: String, required: true },
});

module.exports = mongoose.model('Footer', FooterSchema);
