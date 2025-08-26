const db = require('../models');

const getAllEvents = async () => {
  return await db.Event.findAll({
    include: { model: db.Categorie, as: 'category', required: true, attributes: ['id','nombre','descripcion'] }
  });
};

const getEvent = async (id) => {
  return await db.Event.findByPk(id, {
    include: { model: db.Categorie, as: 'category', required: true, attributes: ['id','nombre','descripcion'] }
  });
};

// ⬇⬇ Cambiado: recibe un solo objeto
const createEvent = async (payload) => {
  try {
    const { name, description, startDate, endDate, categoryId, state, maxCapacity, userId } = payload;
    return await db.Event.create({ name, description, startDate, endDate, categoryId, state, maxCapacity, userId });
  } catch (err) {
    throw err; // lanza para que el controlador responda 4xx/5xx
  }
};

// ⬇⬇ Cambiado: segundo parámetro es objeto (ya lo envía así tu controlador)
const updateEvent = async (id, payload) => {
  try {
    const [count] = await db.Event.update(payload, { where: { id } });
    return count;
  } catch (err) {
    throw err;
  }
};

const deleteEvent = async (id) => {
  try {
    return await db.Event.destroy({ where: { id } });
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent };
