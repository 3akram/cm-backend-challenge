const CoffeeMachineService = require('../src/services/coffee-machine.service');

exports.getAllCoffeeMachines = async (req, res) => {
  const filters          = req.query;
  try {
    const coffeeMachines = await CoffeeMachineService.getAllCoffeeMachines(filters);
    return res.json(coffeeMachines);
  } catch (e) {
    return res.json({"error": e.message.toString()}).status(500);
  }

}
