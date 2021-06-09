'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoffeePod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CoffeePod.init({
    product_type: DataTypes.ENUM('COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'),
    coffee_flavor: DataTypes.ENUM('COFFEE_FLAVOR_VANILLA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL', 'COFFEE_FLAVOR_MOCHA', 'COFFEE_FLAVOR_HAZELNUT'),
    code: DataTypes.STRING,
    pack_size: DataTypes.ENUM('1', '3', '5', '7')
  }, {
    sequelize,
    modelName: 'CoffeePod',
  });
  return CoffeePod;
};