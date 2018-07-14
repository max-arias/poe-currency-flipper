'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CurrencyPair', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
      },
      rate: Sequelize.FLOAT,
      have: {
        type: Sequelize.INTEGER,
        references: { 
            model: 'Currency',
            key: 'id'
        },
        allowNull: false
      },
      want: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'Currency',
          key: 'id'
        },
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CurrencyPair');
  }
};
