'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: 'Rol'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    document: DataTypes.STRING,
    gender: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    rolId: DataTypes.INTEGER,
    passwordRestToken: DataTypes.STRING,
    passwordRestExpires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};