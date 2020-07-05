const express = require('express');
const events = require('./events.controller');
const router = express.Router();

router.get('/', events.index);
router.post('/', events.create);

module.exports = router;