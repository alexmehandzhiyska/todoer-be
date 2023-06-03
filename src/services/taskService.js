const Task = require('../models/index').Task;
const Category = require('../models/index').Category;
const { Op } = require('sequelize');

const getAll = async (dueDate) => {
    let tasks = [];

    if (dueDate === 'null') {
        tasks = await Task.findAll({ where: { due_date: null }, order: [['id', 'ASC']] });
    } else if (dueDate === 'upcoming') {
        const today = new Date();
        tasks = await Task.findAll({ where: { due_date: { [Op.gt]: today } }, order: [['id', 'ASC']] });
    } else  {
        tasks = await Task.findAll({ order: [['id', 'ASC']] });
        
        if (dueDate !== 'inbox') {
            tasks = tasks.filter(task => {
                if (task.dataValues.dueDate) {
                    const taskDueDate = new Date(task.dataValues.dueDate);
                    taskDueDate.setDate(taskDueDate.getDate() + 1);
                    return taskDueDate.toJSON().slice(0, 10) === dueDate;
                }
    
                return false;
            });
        }
    }

    tasks = tasks.map(task => task.dataValues);
    
    for (const task of tasks) {
        const category = await Category.findByPk(task.categoryId);
        task.category = category.dataValues.name;
    }

    return tasks;
};

const getById = async (taskId) => {
    const task = await Task.findByPk(taskId);
    return task.dataValues;
};

const create = async (data) => {
    const category = await Category.findOne({ where: { name: data.category } });
    const taskData = {...data, categoryId: category.dataValues.id};
    const task = await Task.create(taskData);
    return task.dataValues;
};

const updateById = async (taskId, newTask) => {
    const newCategoryData = await Category.findOne({ where: { name: newTask.category } });
    const newCategory = newCategoryData.dataValues;
    newTask.categoryId = newCategory.id;
    
    const newTaskData = await Task.update({ ...newTask }, { where: { id: taskId }, returning: true });
    const task = newTaskData[1][0].dataValues;
    task.category = newCategory.name;

    return task;
};

const deleteById = async (taskId) => {
    await Task.destroy({ where: { id: taskId } });
    return null;
};

module.exports = { getAll, getById, create, updateById, deleteById };