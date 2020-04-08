'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    semestre: DataTypes.STRING,
    profesorId: DataTypes.INTEGER
  }, {freezeTableName: true});
  Curso.associate = function(models) {
    // associations can be defined here
    Curso.hasMany(models.Prueba, {
      foreignKey: 'cursoId',
      as: 'pruebas',
      onDelete: 'CASCADE',
    });
    /*Curso.hasMany(models.CursoInscrito, {
      foreignKey: 'cursoId',
      as: 'cursos-inscritos',
      onDelete: 'CASCADE',
    });*/
    Curso.belongsTo(models.Profesor, {
      foreignKey: 'profesorId',
      as: 'profesor',
      onDelete: 'CASCADE',
    })
  };
  return Curso;
};