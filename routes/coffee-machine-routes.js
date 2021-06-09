const express = require('express');
const CoffeeMachineController = require("../controller/coffee-machines-controller");
const router  = express.Router();

router.get('/', CoffeeMachineController.getAllCoffeeMachines)

module.exports = router;
