var express = require('express');
var router = express.Router();

const { scrapePairs } = require("./../services/scraper");
const { storePairs } = require("./../services/database");

/* GET scrape. */
router.get('/scrape', async (req, res, next) => {
  const scrappedPairs = await scrapePairs();
  storePairs(scrappedPairs);
  res.json(scrappedPairs);
});

module.exports = router;
