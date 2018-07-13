'use strict';
module.exports = (sequelize, DataTypes) => {
  var CurrencyRate = sequelize.define('CurrencyRate', {
    want: DataTypes.STRING,
    have: DataTypes.STRING,
    rate: DataTypes.STRING,
  });

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return CurrencyRate;
};
