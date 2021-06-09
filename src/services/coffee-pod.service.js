const { DataTypes } = require('sequelize');

const Database      = require('./database.service');
const database      = new Database();
const db            =  database.getDatabase()

const CoffeePod = require('../../models/coffeepod')(db, DataTypes);

module.exports = {
  getAllCoffeePods: async (filters) => {
    try {
      return await CoffeePod.findAll({
        where: {...filters}
      });
    } catch (e) {
      throw e;
    }
  }
}
