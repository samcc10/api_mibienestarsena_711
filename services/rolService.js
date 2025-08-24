const db = require("../models");

const getAllRols = async () => {
  try {
    let rols = await db.Rol.findAll();
    return rols;
  } catch (error) {
    return error.message || "Failed to get rols";
  }
};

const getRol = async (id) => {
  try {
    let rol = await db.Rol.findByPk(id);
    return rol;
  } catch (error) {
    throw { status: 500, message: error.message || "Failed to get rol" };
  }
};

const createRol = async (name) => {
  try {
    let newRol = await db.Rol.create({ name });
    return newRol;
  } catch (error) {
    return error.message || "Rol could not be created";
  }
};

const updateRol = async (id, name) => {
  try {
    let updatedRol = await db.Rol.update(
      { name },
      { where: { id } }
    );
    return updatedRol;
  } catch (error) {
    return error.message || "Rol could not be updated";
  }
};

const deleteRol = async (id) => {
  try {
    const deletedRol = await db.Rol.destroy({ where: { id } });
    return deletedRol;
  } catch (error) {
    return error.message || "Rol could not be deleted";
  }
};

module.exports = {
  getAllRols,
  getRol,
  createRol,
  updateRol,
  deleteRol,
};