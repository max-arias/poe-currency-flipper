'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Currencies', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
      },
      name: Sequelize.STRING,
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
    return queryInterface.dropTable('Currencies');
  }
};
