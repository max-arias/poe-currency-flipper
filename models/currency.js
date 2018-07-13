'use strict';
module.exports = (sequelize, DataTypes) => {
  var Currency = sequelize.define('Currency', {
    name: DataTypes.STRING
  });

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return Currency;
};
