const express = require('express');
const Footer = require('../models/Footer');
const router = express.Router();

// Add a new footer (Admin route)
router.post('/footer', async (req, res) => {
  try {
    const { title, description, code } = req.body;
    const newFooter = new Footer({ title, description, code });
    await newFooter.save();
    res.status(201).json({ message: 'Footer added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Fetch all footers
router.get('/footers', async (req, res) => {
  try {
    const footers = await Footer.find({});
    res.status(200).json(footers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
