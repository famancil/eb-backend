'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Profesor', [
    { nombre: 'John Doe', correo: 'john@test.com', createdAt: new Date(), updatedAt: new Date()},
    { nombre: 'Dave Poe', correo: 'dave@test.com', createdAt: new Date(), updatedAt: new Date()},
    { nombre: 'Jessica Amarth', correo: 'jessica@test.com', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Profesor', null, {});
  }
};
