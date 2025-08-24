const UserService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();
    res.status(200).send({ status: "OK", data: allUsers });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const getUser = async (req, res) => {
  try {
    let id = req.params.userId;
    const user = await UserService.getUser(id);
    res.status(200).send({ status: "OK", data: user });
  } catch (error) {
    res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await UserService.createUser(userData);
    res.status(201).send({ status: "OK", data: createdUser });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.params.userId;
    let userData = req.body;
    const updatedUser = await UserService.updateUser(id, userData);
    res.status(200).send({ status: "OK", data: updatedUser });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params.userId;
    const deletedUser = await UserService.deleteUser(id);
    res.status(200).send({ status: "OK", data: deletedUser });
  } catch (error) {
    res.status(400).send({ status: "FAILED", data: { error: error.message } });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};