const express = require('express');
const router  = express.Router();
const data = require("../../phones.json")

router.get('/api/phones', (req, res, next) => {
  res.json(data);
});

module.exports = router;
