const express = require('express');
const router = express.Router();
const controller = require('../controllers/notice.controller');

// TODO: behaviors middleware for Auth on write operations
router.post('/', controller.create);
router.get('/', controller.findAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
