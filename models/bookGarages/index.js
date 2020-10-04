const express = require('express');
const bookGarage = require('./bookGarageController');
const router = express.Router();

/* GET home page. */
console.log('Required Book Garage');

router.post('/', bookGarage.index);
router.post('/bookGarage', bookGarage.garageBooking);
router.post('/updatebookGarage', bookGarage.garageBooking);
router.post('/con',bookGarage.findBooking);
router.delete('/:id',bookGarage.destroy);

module.exports = router;
