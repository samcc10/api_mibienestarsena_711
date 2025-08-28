const db = require("../models");

const getAllUsers = async () => {
  try {
    let users = await db.User.findAll({
      include: {
        model: db.Rol,
        required: false,
        as: "rol", // ← CAMBIADO: de "Rol" a "rol" (minúscula)
        attributes: ["id", "name"],
      },
    });
    return users;
  } catch (error) {
    return error.message || "Failed to get users";
  }
};

const getUser = async (id) => {
  try {
    let user = await db.User.findByPk(id, {
      include: {
        model: db.Rol,
        required: false,
        as: "rol", // ← CAMBIADO: de "Rol" a "rol" (minúscula)
        attributes: ["id", "name"],
      },
    });
    return user;
  } catch (error) {
    throw { status: 500, message: error.message || "Failed to get user" };
  }
};

const createUser = async (userData) => {
  try {
    let newUser = await db.User.create(userData);
    return newUser;
  } catch (error) {
    return error.message || "User could not be created";
  }
};

const updateUser = async (id, userData) => {
  try {
    let updatedUser = await db.User.update(userData, {
      where: { id }
    });
    return updatedUser;
  } catch (error) {
    return error.message || "User could not be updated";
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.User.destroy({ where: { id } });
    return deletedUser;
  } catch (error) {
    return error.message || "User could not be deleted";
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};