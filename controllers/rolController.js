const RolService = require('../services/rolService');

const getAllRols = async (req, res) => {
  try {
    const allRols = await RolService.getAllRols();
    res.status(200).send({ status: "OK", data: allRols });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const getRol = async (req, res) => {
  try {
    let id = req.params.rolId;
    const rol = await RolService.getRol(id);
    res.status(200).send({ status: "OK", data: rol });
  } catch (error) {
    res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
  }
};

const createRol = async (req, res) => {
  try {
    const { name } = req.body;
    const createdRol = await RolService.createRol(name);
    res.status(201).send({ status: "OK", data: createdRol });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const updateRol = async (req, res) => {
  try {
    let id = req.params.rolId;
    let { name } = req.body;
    const updatedRol = await RolService.updateRol(id, name);
    res.status(200).send({ status: "OK", data: updatedRol });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const deleteRol = async (req, res) => {
  try {
    let id = req.params.rolId;
    const deletedRol = await RolService.deleteRol(id);
    res.status(200).send({ status: "OK", data: deletedRol });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

module.exports = {
  getAllRols,
  getRol,
  createRol,
  updateRol,
  deleteRol,
};