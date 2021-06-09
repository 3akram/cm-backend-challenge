const coffeeMachineTypes = require('./coffee-machine-types');

module.exports = [
  {
    code         : 'CM001',
    water_line   : false,
    product_type : coffeeMachineTypes['small'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'CM002',
    water_line   : false,
    product_type : coffeeMachineTypes['small'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'CM003',
    water_line   : false,
    product_type : coffeeMachineTypes['small'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'CM101',
    water_line   : false,
    product_type : coffeeMachineTypes['large'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'CM102',
    water_line   : true,
    product_type : coffeeMachineTypes['large'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'CM103',
    water_line   : true,
    product_type : coffeeMachineTypes['large'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'EM001',
    water_line   : true,
    product_type : coffeeMachineTypes['espresso'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'EM002',
    water_line   : false,
    product_type : coffeeMachineTypes['espresso'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },{
    code         : 'EM003',
    water_line   : true,
    product_type : coffeeMachineTypes['espresso'],
    createdAt    : new Date(),
    updatedAt    : new Date()
  },
];