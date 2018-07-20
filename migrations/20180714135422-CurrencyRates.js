'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CurrencyRates', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
      },
      rate: Sequelize.FLOAT,
      have: {
        type: Sequelize.INTEGER,
        references: { 
            model: 'Currencies',
            key: 'id'
        },
        allowNull: false
      },
      want: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'Currencies',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt',
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt',
        defaultValue: Sequelize.literal('NOW()')
      }
    }, {
      timestamps: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CurrencyRates');
  }
};
