const { DataTypes } = require('sequelize');

const Database      = require('./database.service');
const database      = new Database();
const db            =  database.getDatabase()

const CoffeeMachine = require('../../models/coffeemachine')(db, DataTypes);

module.exports = {
  getAllCoffeeMachines: async (filters) => {
    try {
      return await CoffeeMachine.findAll({
        where: {...filters}
      });
    } catch (e) {
      throw e;
    }
  }
}
