const { DataTypes } = require('sequelize');

const Database      = require('./database.service');
const database      = new Database();
const db            =  database.getDatabase()

const CoffeeMachine = require('../../models/coffeemachine')(db, DataTypes);

/**
 * Return Object that handle filters
 * @private
 */
const __buildFilterQuery = (filters) => {
  return {
    'product_type': '',
    'water_line'  : ''
  };
}

module.exports = {
  getAllCoffeeMachines: async () => {
    try {
      return await CoffeeMachine.findAll();
    } catch (e) {
      throw e;
    }
  }
}
