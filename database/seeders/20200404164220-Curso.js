'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Curso', [
      {
        nombre: 'Introducción a REST',
        descripcion: 'Curso que explica el concepto y como trabajarlo en varios lenguajes.',
        semestre: '2019-1',
        profesorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        nombre: 'Servidor REST API',
        descripcion: 'Curso que profundiza en la construcción de servicio API RESt.',
        semestre: '2019-1',
        profesorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Lenguajes de Programación',
        descripcion: 'Curso que explica los lenguajes mas ocupado en las empresas.',
        semestre: '2019-1',
        profesorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Curso', null, {});
  }
};
