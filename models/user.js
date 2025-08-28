'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Un usuario pertenece a un rol
      User.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: 'rol'  // Cambiado a minúscula para consistencia
      });

      // ⬇⬇⬇ NUEVA ASOCIACIÓN: Un usuario tiene muchos eventos
      User.hasMany(models.Event, {
        foreignKey: 'userId',
        as: 'events'
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
    tableName: 'Users',
    freezeTableName: true
  });
  return User;
};