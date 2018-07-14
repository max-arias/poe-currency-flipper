'use strict';

module.exports = (sequelize, DataTypes) => {
  var Currency = sequelize.define('Currency', {
    name: DataTypes.STRING
  });

  return Currency;
};
