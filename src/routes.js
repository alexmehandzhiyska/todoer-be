const router = require('express').Router();

const taskController = require('./controllers/taskController');
const areaController = require('./controllers/areaController');
const categoryController = require('./controllers/categoryController');

router.use('/tasks', taskController);
router.use('/areas', areaController);
router.use('/categories', categoryController);

module.exports = router;