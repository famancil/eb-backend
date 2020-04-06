'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Prueba', [
      { nombre: 'Prueba 1', nota: 1.5, cursoId: 1, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 2.0, cursoId: 1, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 3.0, cursoId: 1, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 2', nota: 4.5, cursoId: 1, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 2', nota: 3.0, cursoId: 1, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 2', nota: 2.0, cursoId: 1, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 3', nota: 2.2, cursoId: 1, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 3', nota: 3.2, cursoId: 1, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 3', nota: 2.5, cursoId: 1, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 4.5, cursoId: 2, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 2.8, cursoId: 2, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 3.0, cursoId: 2, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 1.5, cursoId: 2, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 4.8, cursoId: 2, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 3.0, cursoId: 2, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 1.5, cursoId: 2, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 1.8, cursoId: 2, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 1.0, cursoId: 2, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 3.5, cursoId: 3, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 1.8, cursoId: 3, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 1.0, cursoId: 3, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 1.5, cursoId: 3, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 1.8, cursoId: 3, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 1.0, cursoId: 3, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()},
      { nombre: 'Prueba 1', nota: 1.5, cursoId: 3, alumnoId: 1, createdAt: new Date(), updatedAt: new Date()},      
      { nombre: 'Prueba 1', nota: 1.8, cursoId: 3, alumnoId: 2, createdAt: new Date(), updatedAt: new Date()}, 
      { nombre: 'Prueba 1', nota: 1.0, cursoId: 3, alumnoId: 3, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Prueba', null, {});
  }
};
