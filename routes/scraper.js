var express = require('express');
var router = express.Router();

const { scrapePairs } = require("./../services/scraper");

/* Initialize scrape jobs */
router.get('/scrape', async (req, res, next) => {
  const scrapeData = await scrapePairs();
  res.json(scrapeData);
});

module.exports = router;
