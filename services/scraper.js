const queue = require('bull');

const _ = require('lodash');
require('lodash.combinations');


const { getCurrencies } = require("./../services/database");

const scrapePairs = async () => {
  const currencies = await getCurrencies();
  const currencyIds = _.map(currencies, 'id');
  const currencyPairs = _.combinations([1, 2, 3], 2);
  // const currencyPairs = _.combinations(currencyIds, 2);

  const ratesQueue = new queue('Rates_Queue', 'redis://redis:6379');

  ratesQueue.process(__dirname + '/../workers/process.js');

  for (const pair of currencyPairs) {
    const randomInterval = Math.floor(Math.random() * 250) + 1;
    console.log('Waiting: ', randomInterval, ' Pair: ', pair);

    ratesQueue.add({
      pair,
      url: buildUrl(pair[0], pair[1]),
    }, {
      delay: randomInterval
    });
  }

  return {
    currencies,
    currencyPairs
  };
};

const buildUrl = (want, have) => `http://currency.poe.trade/search?league=Incursion&online=x&want=${want}&have=${have}`;

module.exports = {
  scrapePairs,
}
