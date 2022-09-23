// xxxxx-AddVariants.js
'use strict';
// Reusable Description
const description = "A wireless set that are compatible with many devices. They are High-performance wireless noise cancelling headphones. Don't miss out on these today!"
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, item: 'White', slug: 'white', description, price: 149.95, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, item: 'Red', slug: 'red', description, price: 149.95, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, item: 'Blue', slug: 'blue', description, price: 189.99, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, item: 'Gold', slug: 'gold', description, price: 189.99, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
