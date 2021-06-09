const CoffeeMachineService = require('../src/services/coffee-machine.service');

exports.getAllCoffeeMachines = async (req, res) => {
  const filters = req.query;
  const coffeeMachines = await CoffeeMachineService.getAllCoffeeMachines(filters);
  return res.json(coffeeMachines);
}
