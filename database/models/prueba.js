'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prueba = sequelize.define('Prueba', {
    nombre: DataTypes.STRING,
    nota: DataTypes.FLOAT,
    cursoId: DataTypes.INTEGER,
    alumnoId: DataTypes.INTEGER
  }, {freezeTableName: true});
  Prueba.associate = function(models) {
    // associations can be defined here
    Prueba.belongsTo(models.Alumno, {
      foreignKey: 'alumnoId',
      as: 'alumno',
      onDelete: 'CASCADE'
    });
    Prueba.belongsTo(models.Curso, {
      foreignKey: 'cursoId',
      as: 'curso',
      onDelete: 'CASCADE'
    });
  };
  return Prueba;
};