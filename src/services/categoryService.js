const Category = require('../models/index').Category;
const Task = require('../models/index').Task;

const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

const getById = async (categoryId) => {
    const category = await Category.findByPk(categoryId);
    return category.dataValues;
};

const getByAreaId = async (areaId) => {
    const categories = await Category.findAll({ where: { area_id: areaId } });
    return categories;
};

const getTasks = async (categoryId) => {
    const tasks = await Task.findAll({ where: { category_id: categoryId } });
    return tasks;
};

const create = async (data) => {
    const category = await Category.create(data);
    return category.dataValues;
};

const updateById = async (categoryId, newCategory) => {
    const category = await Category.update({ ...newCategory }, { where: { id: categoryId }, returning: true });
    return category[1][0].dataValues;
};

const deleteById = async (categoryId) => {
    await Category.destroy({ where: { id: categoryId } });
    return null;
};

module.exports = { getAll, getById, getByAreaId, getTasks, create, updateById, deleteById };