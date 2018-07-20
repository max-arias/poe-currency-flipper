const models  = require('./../models');

const saveCurrencyRate = (want, have, rate) => {

  console.log(want, have, rate);

  //TODO: Need to fix models
  return;

  models.CurrencyRate.create({
    rate: rate,
    have: have,
    want: want
  });
}

const getCurrencies = () => {
  return models.Currency.findAll();
}

module.exports = {
  getCurrencies,
  saveCurrencyRate,
}
