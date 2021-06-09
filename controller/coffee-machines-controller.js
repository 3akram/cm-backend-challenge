const CoffeeMachineService = require('../src/services/coffee-machine.service');

exports.getAllCoffeeMachines = async (req, res) => {
  const coffeeMachines = await CoffeeMachineService.getAllCoffeeMachines();
  return res.json(coffeeMachines);
}
