const router = require('express').Router();

const taskController = require('./controllers/taskController');
const areaController = require('./controllers/areaController');
const categoryController = require('./controllers/categoryController');
const eventController = require('./controllers/eventController');

router.use('/tasks', taskController);
router.use('/areas', areaController);
router.use('/categories', categoryController);
router.use('/events', eventController);

module.exports = router;