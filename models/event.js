'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     */
    static associate(models) {
      // Un evento pertenece a una categoría
      Event.belongsTo(models.Categorie, {
        as: 'category',
        foreignKey: 'categoryId'
      });

      // Una categoría tiene muchos eventos
      models.Categorie.hasMany(Event, {
        as: 'events',
        foreignKey: 'categoryId'
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
    state: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};
