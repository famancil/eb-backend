'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prueba', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {        
        type: Sequelize.STRING,
        allowNull: false
      },
      nota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Curso',
          key: 'id'
        }
      },
      alumnoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Alumno',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
    .then(() => queryInterface.addIndex('Prueba', ['id', 'nota']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prueba');
  }
};