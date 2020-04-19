var express = require('express');
var controller =require ('./locations');

var router = express.Router();

router.get('/', controller.getLocations);
router.post('/addLocations', controller.create);

module.exports = router;