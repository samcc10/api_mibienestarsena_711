'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      // Definir asociación con User
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
  });
  return Rol;
};