const UserController = require("../models/User");

const getUsers = async(req, res) => {
    const users = await UserController.find();
    res.json(users);
};

const getAllUsers = async(req, res) => {
    const users = await UserController.find(req.params.id);
    res.json(users);
};

const addUser = async(req, res) => {
    const user = await new UserController({
        name: req.body.name,
        email: req.body.email
    });
    await user.save();
    res.json("Пользователь добавлен");
};

module.exports = {
    addUser,
    getUsers,
    getAllUsers
};