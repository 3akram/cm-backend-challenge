const CoffeePodService = require('../src/services/coffee-pod.service');

exports.getAllCoffeePods = async (req, res) => {
  const filters = req.query;
  try {
    const coffeeMachines = await CoffeePodService.getAllCoffeePods(filters);
    return res.json(coffeeMachines);
  } catch(e) {
    return res.json({"error": e.message.toString()});
  }

}
