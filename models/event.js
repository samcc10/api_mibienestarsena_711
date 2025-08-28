'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Un evento pertenece a una categoría
      Event.belongsTo(models.Categorie, {
        as: 'category',
        foreignKey: 'categoryId'
      });

      // ⬇⬇⬇ NUEVA ASOCIACIÓN: Un evento pertenece a un usuario
      Event.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
    }
  }

  Event.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {  // ESTE CAMPO YA EXISTE EN TU BD
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};