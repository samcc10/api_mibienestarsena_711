const db = require('../models');

const getAllCategories = async () => {
  try {
    const categories = await db.Categorie.findAll();
    if (!categories || categories.length === 0) {
      throw { status: 404, message: "No se encontraron categorías" };
    }
    return categories;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Error al obtener categorías"
    };
  }
};

const getCategorie = async (id) => {
  try {
    const categorie = await db.Categorie.findByPk(id);
    if (!categorie) {
      throw { status: 404, message: "Categoría no encontrada" };
    }
    return categorie;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Error al obtener la categoría"
    };
  }
};

const createCategorie = async (nombre, descripcion, imagen) => {
  try {
    if (!nombre) throw { status: 400, message: "El nombre es requerido" };
    return await db.Categorie.create({ nombre, descripcion, imagen });
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al crear categoría"
    };
  }
};

const updateCategorie = async (id, nombre, descripcion, imagen) => {
  try {
    const [updatedRows] = await db.Categorie.update(
      { nombre, descripcion, imagen },
      { where: { id } }
    );
    if (updatedRows === 0) {
      throw { status: 404, message: "Categoría no encontrada" };
    }
    return { id, nombre, descripcion, imagen };
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al actualizar categoría"
    };
  }
};

const deleteCategorie = async (id) => {
  try {
    const deletedRows = await db.Categorie.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw { status: 404, message: "Categoría no encontrada" };
    }
    return { message: "Categoría eliminada correctamente" };
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Error al eliminar categoría"
    };
  }
};

// metodos

module.exports = {
  getAllCategories,
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie
};
