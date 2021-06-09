'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoffeeMachine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CoffeeMachine.init({
    product_type: DataTypes.ENUM('COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'),
    water_line  : DataTypes.BOOLEAN,
    code        : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CoffeeMachine',
  });

  CoffeeMachine.addScope('compatible', {
    where: {
      water_line: true
    }
  });

  return CoffeeMachine;
};