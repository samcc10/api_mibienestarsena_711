const db = require('../../../models');
const { Router } = require('express');
const eventController = require('../../../controllers/eventController');

const router = Router();

router.get('/', eventController.getAllEvents);
router.get('/:eventId', eventController.getEvent);
router.post('/', eventController.createEvent);
router.put('/:eventId', eventController.updateEvent);
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;