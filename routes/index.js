// Require Express
const express = require('express');

// Create new router
const router = express.Router();

// Handle index route
router.get('/', (req, res) => {
  res.render('index');
});

// Export router
module.exports = router;