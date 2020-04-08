'use strict';
module.exports = (sequelize, DataTypes) => {
  const CursoInscrito = sequelize.define('CursoInscrito', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    cursoId: DataTypes.INTEGER,
    alumnoId: DataTypes.INTEGER
  }, {freezeTableName: true});
  CursoInscrito.associate = function(models) {
    // associations can be defined here
    models.Curso.belongsToMany(models.Alumno, {
      as: 'inscritos', 
      through: {model: CursoInscrito }, 
      foreignKey: 'cursoId'
    })
    models.Alumno.belongsToMany(models.Curso, {
      as: 'cursos', 
      through: {model: CursoInscrito }, 
      foreignKey: 'alumnoId'
    })
    /*CursoInscrito.belongsTo(models.Curso, {
      foreignKey: 'cursoId',
      as: 'curso',
      onDelete: 'CASCADE',
    })
    CursoInscrito.belongsTo(models.Alumno, {
      foreignKey: 'alumnoId',
      as: 'alumno',
      onDelete: 'CASCADE',
    })*/
  };
  return CursoInscrito;
};