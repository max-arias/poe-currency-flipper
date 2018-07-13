const q = require('q');
const rp = require('request-promise');
const sleep = require('await-sleep');
const cheerio = require('cheerio');

const _ = require('lodash');
require('lodash.combinations');

const currencies = require('./../currencies.json');

const scrapePairs = async () => {
  const currencyIds = _.map(currencies, 'id');
  const currencyPairs = _.combinations(currencyIds, 2);
  const currencyPairRates = {};

  console.time('scrapePairs');

  for (const pair of currencyPairs) {
    const randomInterval = Math.floor(Math.random() * 250) + 1;
    console.log('Waiting: ', randomInterval);

    await sleep(randomInterval);

    const currencyUrl = buildUrl(pair[0], pair[1]);
    const body = await fetchUrl(currencyUrl);
    const rates = parsePairResponse(pair, body);

    currencyPairRates[pair[0] + '-' + pair[1]] = rates;
  }

  console.timeEnd('scrapePairs');

  return currencyPairRates;
};

const fetchUrl = async (url) => {
  return await rp({
      url: url,
      gzip: true
  });
};

const parsePairResponse = (pair, body) => {
  const $ = cheerio.load(body);
  const rates = [];

  $('.displayoffer').each(function(i, element) {
    let rate = $(element).find('.displayoffer-centered').first().find('small').text();
    rate = rate.replace('←', ':').replace(/ /g,'').replace(/[^\x00-\x7F]/g, '');

    const pairDoc = {
      want: pair[0],
      have: pair[1],
      rate
    }

    rates.push(pairDoc);
  });

  return _.uniq(rates);
};

const buildUrl = (want, have) => `http://currency.poe.trade/search?league=Incursion&online=x&want=${want}&have=${have}`;

module.exports = {
  scrapePairs,
}
