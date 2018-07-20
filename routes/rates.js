var express = require('express');
var router = express.Router();

/* Return rates */
router.get('/rates', async (req, res, next) => {
  res.json({'ok': true});
});

module.exports = router;
