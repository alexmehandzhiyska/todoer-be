const Area = require('../models/index').Area;
const Category = require('../models/index').Category;

const getAll = async () => {
    const areas = await Area.findAll({});
    return areas;
};

const getById = async (areaId) => {
    const area = await Area.findByPk(areaId);
    return area.dataValues;
};

const getCategories = async (areaId) => {
    const categories = await Category.findAll({ where: { area_id: areaId } });
    return categories;
};

const create = async (data) => {
    const area = await Area.create(data);
    return area.dataValues;
};

const updateById = async (areaId, newArea) => {
    const area = await Area.update({ ...newArea }, { where: { id: areaId }, returning: true });
    return area[1][0].dataValues;
};

const deleteById = async (areaId) => {
    await Area.destroy({ where: { id: areaId } });
    return null;
};

module.exports = { getAll, getById, getCategories, create, updateById, deleteById };