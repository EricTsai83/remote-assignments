const express = require('express');
const router = express.Router();

router.get('/trackName', (req, res) => {
  let { name } = req.query;
  if (name) {
    res.cookie('name', name);
  }
  res.redirect('/myName');
});

module.exports = router;
