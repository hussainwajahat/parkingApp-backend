var express = require('express');
var controller =require ('./locations');

var router = express.Router();

router.get('/', controller.index);
router.post('/addLocations', controller.create);
router.post('/updateSlotStatus', controller.update);

module.exports = router;