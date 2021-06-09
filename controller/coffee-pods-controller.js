const CoffeePodService = require('../src/services/coffee-pod.service');

exports.getAllCoffeePods = async (req, res) => {
  const filters = req.query;
  const coffeeMachines = await CoffeePodService.getAllCoffeePods(filters);
  return res.json(coffeeMachines);
}
