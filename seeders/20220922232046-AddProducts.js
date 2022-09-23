// xxxxx-AddProducts.js
'use strict';
// Reusable Description
const description = `Run it up the flag pole spinning our wheels. This is not the hill i want to die on digital literacy yet dear hiring manager: yet run it up the flagpole, ping the boss and circle back so service as core &innovations as power makes our brand globalize.`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        item: 'Beats Studio Buds', 
        slug: 'beats-studio-buds', 
        price: 149.95, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        item: 'Beats Studio3 ', 
        slug: 'beats-Studio3 ', 
        price: 189.99, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
