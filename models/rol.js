'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasMany(models.User, {
        foreignKey: 'rolId',
        as: 'Users'
      });
    }
  }
  Rol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'Rols', // ← AGREGAR ESTA LÍNEA
    freezeTableName: true // ← OPCIONAL: evitar pluralización
  });
  return Rol;
};