const router = require('express').Router();
const taskService = require('../services/taskService');

const getAll = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

const getById = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await taskService.getById(taskId);
        res.status(200).json(task);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

const create = async (req, res) => {
    const data = req.body;

    try {
        const task = await taskService.create(data);
        res.status(201).json(task);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

const updateById = async (req, res) => {
    const { taskId } = req.params
    const newTask = req.body;

    try {
        const task = await taskService.updateById(taskId, newTask);
        res.status(200).json(task);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

const deleteById = async (req, res) => {
    const { taskId } = req.params;

    try {
        await taskService.deleteById(taskId);
        res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

router.get('/', getAll);
router.post('/', create);
router.get('/:taskId', getById);
router.patch('/:taskId', updateById);
router.delete('/:taskId', deleteById);

module.exports = router;