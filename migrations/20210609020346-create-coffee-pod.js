'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CoffeePods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_type: {
        type: Sequelize.ENUM('COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD')
      },
      coffee_flavor: {
        type: Sequelize.ENUM('COFFEE_FLAVOR_VANILLA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL', 'COFFEE_FLAVOR_MOCHA', 'COFFEE_FLAVOR_HAZELNUT')
      },
      code: {
        type: Sequelize.STRING
      },
      pack_size: {
        type: Sequelize.ENUM('1', '3', '5', '7')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CoffeePods');
  }
};