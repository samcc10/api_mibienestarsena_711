const db = require('../models');

const getAllEvents = async () => {
  return await db.Event.findAll({
    include: [
      { 
        model: db.Categorie, 
        as: 'category', 
        attributes: ['id','nombre','descripcion'] 
      },
      { 
        model: db.User,
        as: 'user',
        attributes: ['id', 'username', 'email']
      }
    ]
  });
};

const getEvent = async (id) => {
  return await db.Event.findByPk(id, {
    include: [
      { 
        model: db.Categorie, 
        as: 'category', 
        attributes: ['id','nombre','descripcion'] 
      },
      { 
        model: db.User,
        as: 'user',
        attributes: ['id', 'username', 'email']
      }
    ]
  });
};

const createEvent = async (payload) => {
  const { name, description, startDate, endDate, categoryId, state, maxCapacity, userId } = payload;
  
  // Validar que el usuario exista
  const user = await db.User.findByPk(userId);
  if (!user) {
    throw { status: 400, message: "El usuario especificado no existe" };
  }
  
  // Validar que la categoría exista
  const category = await db.Categorie.findByPk(categoryId);
  if (!category) {
    throw { status: 400, message: "La categoría especificada no existe" };
  }
  
  return await db.Event.create({ 
    name, description, startDate, endDate, categoryId, state, maxCapacity, userId 
  });
};

const updateEvent = async (id, payload) => {
  const [updatedRows] = await db.Event.update(payload, { where: { id } });
  return updatedRows;
};

const deleteEvent = async (id) => {
  return await db.Event.destroy({ where: { id } });
};

module.exports = { 
  getAllEvents, 
  getEvent, 
  createEvent, 
  updateEvent, 
  deleteEvent 
};