// Require Express
const express = require('express');

// Create new router
const router = express.Router();

// Handle about route
router.get('/', (req, res) => {
  res.render('work.html');
});

// Export router
module.exports = router;