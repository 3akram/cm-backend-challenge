const coffeePodTypes = require('./coffee-pod-types');
const coffeeFlavors  = require('./coffee-flavors');

/**
 *
 * @type {[{createdAt: Date, code: string, product_type: string, pack_size: string, coffee_flavor: string, updatedAt: Date}]}
 */
module.exports = [
  {
    code            : 'CP001',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP003',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP011',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP013',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP021',
    coffee_flavor   : coffeeFlavors['psl'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP023',
    coffee_flavor   : coffeeFlavors['psl'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP031',
    coffee_flavor   : coffeeFlavors['mocha'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP033',
    coffee_flavor   : coffeeFlavors['mocha'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP041',
    coffee_flavor   : coffeeFlavors['hazelnut'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP043',
    coffee_flavor   : coffeeFlavors['hazelnut'],
    product_type    : coffeePodTypes['small'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP101',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP103',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP111',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP113',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP121',
    coffee_flavor   : coffeeFlavors['psl'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP123',
    coffee_flavor   : coffeeFlavors['psl'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP131',
    coffee_flavor   : coffeeFlavors['mocha'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP133',
    coffee_flavor   : coffeeFlavors['mocha'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP141',
    coffee_flavor   : coffeeFlavors['hazelnut'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '1',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'CP143',
    coffee_flavor   : coffeeFlavors['hazelnut'],
    product_type    : coffeePodTypes['large'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP003',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP005',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '5',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP007',
    coffee_flavor   : coffeeFlavors['vanilla'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '7',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP013',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '3',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP015',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '5',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },{
    code            : 'EP017',
    coffee_flavor   : coffeeFlavors['caramel'],
    product_type    : coffeePodTypes['espresso'],
    pack_size       : '7',
    createdAt       : new Date(),
    updatedAt       : new Date()
  },
];
