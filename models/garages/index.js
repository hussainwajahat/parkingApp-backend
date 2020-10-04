const express = require('express');
const garage = require('./garageController');
const router = express.Router();

/* GET home page. */
console.log('Required Garage');

router.get('/', garage.index);
router.post('/addGarage', garage.createGarage);
router.post('/updateGarage', garage.createGarage);
router.post('/con',garage.findGarage);
router.delete('/:id',garage.destroy);

module.exports = router;
