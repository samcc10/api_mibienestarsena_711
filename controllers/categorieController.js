const categorieService = require('../services/categorieService');

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await categorieService.getAllCategories();
        res.status(200).send({ status: "OK", data: allCategories });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: { error: error.message || "Error al obtener categorías" }
        });
    }
};

const getCategorie = async (req, res) => {
    try {
        const id = req.params.categorieId;
        const categorie = await categorieService.getCategorie(id);
        res.status(200).send({ status: "OK", data: categorie });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: { error: error.message || "Error al obtener la categoría" }
        });
    }
};

const createCategorie = async (req, res) => {
    try {
        const { nombre, descripcion, imagen } = req.body;
        const createdCategorie = await categorieService.createCategorie(nombre, descripcion, imagen);
        res.status(201).send({ status: "OK", data: createdCategorie });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al crear categoría" }
        });
    }
};

const updateCategorie = async (req, res) => {
    try {
        const id = req.params.categorieId;
        const { nombre, descripcion, imagen } = req.body;
        const updatedCategorie = await categorieService.updateCategorie(id, nombre, descripcion, imagen);
        res.status(200).send({ status: "OK", data: updatedCategorie });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al actualizar categoría" }
        });
    }
};

const deleteCategorie = async (req, res) => {
    try {
        const id = req.params.categorieId;
        const deletedCategorie = await categorieService.deleteCategorie(id);
        res.status(200).send({ status: "OK", data: deletedCategorie });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al eliminar categoría" }
        });
    }
};

module.exports = {
    getAllCategories,
    getCategorie,
    createCategorie,
    updateCategorie,
    deleteCategorie
};