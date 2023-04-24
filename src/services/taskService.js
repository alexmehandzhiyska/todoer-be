const Task = require('../models/index').Task;

const getAll = async (dueDate) => {
    let tasks = [];
    
    if (dueDate == 'null') {
        tasks = await Task.findAll({ where: { due_date: null } });
    } else {
        tasks = await Task.findAll({});

        if (dueDate) {
            tasks = tasks.filter(task => new Date(task.dueDate).toJSON().slice(0, 10) == dueDate);
        }
    }
    
    return tasks;
};

const getById = async (taskId) => {
    const task = await Task.findByPk(taskId);
    return task.dataValues;
};

const create = async (data) => {
    const task = await Task.create(data);
    return task.dataValues;
};

const updateById = async (taskId, newTask) => {
    const task = await Task.update({ ...newTask }, { where: { id: taskId }, returning: true });
    return task[1][0].dataValues;
};

const deleteById = async (taskId) => {
    await Task.destroy({ where: { id: taskId } });
    return null;
};

module.exports = { getAll, getById, create, updateById, deleteById };