const router = require('express').Router();
const areaService = require('../services/areaService');

const getAll = async (req, res) => {
    try {
        const areas = await areaService.getAll();
        res.status(200).json(areas);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const getById = async (req, res) => {
    const { areaId } = req.params;

    try {
        const area = await areaService.getById(areaId);
        res.status(200).json(area);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const getCategories = async (req, res) => {
    const { areaId } = req.params;

    try {
        const categories = await areaService.getCategories(areaId);
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const create = async (req, res) => {
    const data = req.body;

    try {
        const area = await areaService.create(data);
        res.status(200).json(area);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const updateById = async (req, res) => {
    const { areaId } = req.params
    const newArea = req.body;

    try {
        const area = await areaService.updateById(areaId, newArea);
        res.status(200).json(area);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

const deleteById = async (req, res) => {
    const { areaId } = req.params;

    try {
        await areaService.deleteById(areaId);
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

router.get('/', getAll);
router.post('/', create);
router.get('/:areaId', getById);
router.patch('/:areaId', updateById);
router.delete('/:areaId', deleteById);
router.get('/:areaId/categories', getCategories);

module.exports = router;