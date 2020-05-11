var express = require('express');
var controller =require ('./locations');

var router = express.Router();

router.get('/', controller.index);
router.post('/addLocations', controller.create);
router.post('/updateLocations', controller.create);
router.delete('/:id', controller.destroy);
router.post('/updateSlotStatus', controller.update);

module.exports = router;