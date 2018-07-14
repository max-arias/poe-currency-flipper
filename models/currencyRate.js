'use strict';

module.exports = (sequelize, DataTypes) => {
  var CurrencyRate = sequelize.define('CurrencyRate', {
    rate: DataTypes.FLOAT,
  });

  CurrencyRate.associate = function (models) {
    models.CurrencyRate.belongsTo(models.Currency, {as: 'want'});
    models.CurrencyRate.belongsTo(models.Currency, {as: 'have'});
  };

  return CurrencyRate;
};
