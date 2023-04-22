const Task = require('../models/index').Task;

const getAll = async () => {
    const tasks = await Task.findAll({});
    return tasks;
};

const getById = async (taskId) => {
    const task = await Task.findByPk(taskId);
    return task.dataValues;
}

module.exports = { getAll, getById };