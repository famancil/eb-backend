'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CursoInscrito', [
      { cursoId: 1, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { cursoId: 1, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { cursoId: 1, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { cursoId: 2, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { cursoId: 2, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { cursoId: 2, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},      
      { cursoId: 3, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { cursoId: 3, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { cursoId: 3, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CursoInscrito', null, {});
  }
};
