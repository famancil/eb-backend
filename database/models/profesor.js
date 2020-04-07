'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    nombre: DataTypes.STRING,
    correo: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          args: true,
          msg: 'Correo invalido, revise nuevamente'
        }
        /*isUnique: function (value, next) {
          var self = this;
          Profesor.findOne({where: {correo: value}})
          .then(function (user) {
              // reject if a different user wants to use the same email
              if (user && self.id !== user.id) {
                  return next('Correo ya existe, intente con otro');
              }
              return next();
          })
          .catch(function (err) {
              return next(err);
          });*/
        }
      },  
    }, {freezeTableName: true});
  Profesor.associate = function(models) {
    // associations can be defined here
    Profesor.hasMany(models.Curso, {
      foreignKey: 'profesorId',
      as: 'cursos',
      onDelete: 'CASCADE',
    });
  };
  return Profesor;
};