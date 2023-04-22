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

router.get('/', getAll);
router.get('/:taskId', getById);

module.exports = router;