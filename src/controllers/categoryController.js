const router = require('express').Router();
const categoryService = require('../services/categoryService');

const getAll = async (req, res) => {
    try {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const getById = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const category = await categoryService.getById(categoryId);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const getTasks = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const tasks = await categoryService.getTasks(categoryId);
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const create = async (req, res) => {
    const data = req.body;

    try {
        const category = await categoryService.create(data);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const updateById = async (req, res) => {
    const { categoryId } = req.params
    const newCategory = req.body;

    try {
        const category = await categoryService.updateById(categoryId, newCategory);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const deleteById = async (req, res) => {
    const { categoryId } = req.params;

    try {
        await categoryService.deleteById(categoryId);
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

router.get('/', getAll);
router.post('/', create);
router.get('/:categoryId', getById);
router.patch('/:categoryId', updateById);
router.delete('/:categoryId', deleteById);
router.get('/:categoryId/tasks', getTasks);

module.exports = router;