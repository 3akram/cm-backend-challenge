'use strict';

const COFFEE_PODS_DATA = require('../helpers/coffee-pods');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CoffeePods', [...COFFEE_PODS_DATA], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CoffeePods', null, {});
  }
};
