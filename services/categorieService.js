const db = require('../models');

const getAllEvents = async () => {
  try {
    const events = await db.Event.findAll({
      include: {
        model: db.Categorie,
        as: 'category',
        required: true,
        attributes: ['id', 'nombre', 'descripcion']
      }
    });

    if (!events || events.length === 0) {
      throw { status: 404, message: "No se encontraron eventos" };
    }

    return events;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Error al obtener eventos"
    };
  }
};

const getEvent = async (id) => {
  try {
    const event = await db.Event.findByPk(id, {
      include: {
        model: db.Categorie,
        as: 'category',
        required: true,
        attributes: ['id', 'nombre', 'descripcion']
      }
    });

    if (!event) {
      throw { status: 404, message: "Evento no encontrado" };
    }

    return event;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Error al obtener el evento"
    };
  }
};

const createEvent = async (payload) => {
  try {
    const { name, description, startDate, endDate, categoryId, state, maxCapacity, userId } = payload;

    if (!name) {
      throw { status: 400, message: "El nombre es requerido" };
    }
    if (!categoryId) {
      throw { status: 400, message: "La categoría es requerida" };
    }

    return await db.Event.create({ name, description, startDate, endDate, categoryId, state, maxCapacity, userId });
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al crear evento"
    };
  }
};

const updateEvent = async (id, payload) => {
  try {
    const [updatedRows] = await db.Event.update(payload, { where: { id } });

    if (updatedRows === 0) {
      throw { status: 404, message: "Evento no encontrado" };
    }

    return { id, ...payload };
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al actualizar evento"
    };
  }
};

const deleteEvent = async (id) => {
  try {
    const deletedRows = await db.Event.destroy({ where: { id } });

    if (deletedRows === 0) {
      throw { status: 404, message: "Evento no encontrado" };
    }

    return { message: "Evento eliminado correctamente" };
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al eliminar evento"
    };
  }
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
};
