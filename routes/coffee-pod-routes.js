const express = require('express');
const CoffeePodsController = require("../controller/coffee-pods-controller");
const router  = express.Router();

router.get('/', CoffeePodsController.getAllCoffeePods)

module.exports = router;
