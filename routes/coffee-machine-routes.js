const express = require('express');
const CoffeeMachinesController = require("../controller/coffee-machines-controller");
const router  = express.Router();

router.get('/', CoffeeMachinesController.getAllCoffeeMachines)

module.exports = router;
