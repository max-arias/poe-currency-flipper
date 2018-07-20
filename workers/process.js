const rp = require('request-promise');
const cheerio = require('cheerio');
const _ = require('lodash');

const { saveCurrencyRate } = require("./../services/database");

const fetchUrl = async (uri) => {
  return await rp({
      uri,
      gzip: true
  });
};

const parsePairResponse = (pair, body) => {
  const $ = cheerio.load(body);
  const rates = [];

  $('.displayoffer').each(function(i, element) {
    let rate = $(element).find('.displayoffer-centered').first().find('small').text();

    // Replaces arrow, spaces and non-ascii chars
    rate = rate.replace('←', ':').replace(/ /g,'').replace(/[^\x00-\x7F]/g, '');
    rate = rate.replace('1:', '');

    const pairDoc = {
      want: pair[0],
      have: pair[1],
      rate
    }

    rates.push(pairDoc);
  });

  return _.uniq(rates);
};

const processRetrievedRates = (rates) => {
  rates.map((rate) => {
    saveCurrencyRate(rate.want, rate.have, parseFloat(rate.rate));
  });
}

module.exports = (job, done) => {
  const pair = job.data.pair;
  const pairUrl = job.data.url;

  fetchUrl(pairUrl).then((body) => {
    const rates = parsePairResponse(pair, body);
    processRetrievedRates(rates);
    done(null, rates);
  }).catch((err) => {
    done(error);
  });
}
