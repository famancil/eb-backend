'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Alumno', [
      {
        nombre: 'Felipe Mancilla',
        correo: 'felipe@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        nombre: 'Natalia Aguero',
        correo: 'natalia@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Victor Torres',
        correo: 'victor@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alumno', null, {});
  }
};
