const express = require('express');

const router = express.Router();

/* Index Route. */
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = router;
