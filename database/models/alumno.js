'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alumno = sequelize.define('Alumno', {
    nombre: {
      type: DataTypes.STRING,
      validate:{
        isUnique: function (value, next) {
          var self = this;
          Alumno.findOne({where: {nombre: value}})
          .then(function (user) {
              if (user && self.id !== user.id) {
                  return next('Nombre ya existe, intente con otro');
              }
              return next();
          })
          .catch(function (err) {
              return next(err);
          });
        }
      }
    },

    correo: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          args: true,
          msg: 'Correo invalido, revise nuevamente'
        },
        isUnique: function (value, next) {
          var self = this;
          Alumno.findOne({where: {correo: value}})
          .then(function (user) {
              if (user && self.id !== user.id) {
                  return next('Correo ya existe, intente con otro');
              }
              return next();
          })
          .catch(function (err) {
              return next(err);
          });
        }
      }
    }
  },{freezeTableName: true});

  Alumno.associate = function(models) {
    // associations can be defined here
    Alumno.hasMany(models.Prueba, {
      foreignKey: 'alumnoId',
      as: 'pruebas',
      onDelete: 'CASCADE',
    });
  };
  return Alumno;
};