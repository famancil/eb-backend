'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profesor', [
    { nombre: 'John Doe', correo: 'john@test.com', createdAt: new Date(), updatedAt: new Date()},
    { nombre: 'Dave Poe', correo: 'dave@test.com', createdAt: new Date(), updatedAt: new Date()},
    { nombre: 'Jessica Amarth', correo: 'jessica@test.com', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Profesor', null, {});
  }
};
