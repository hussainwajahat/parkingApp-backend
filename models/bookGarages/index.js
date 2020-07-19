const express = require('express');
const bookGarage = require('./garageController');
const router = express.Router();

/* GET home page. */
console.log('Required Book Garage');

router.post('/', bookGarage.index);
router.post('/bookGarage', bookGarage.create);
router.put('/updatebookGarage', bookGarage.update);
router.post('/con',bookGarage.findGarage);
router.delete('/:id',bookGarage.destroy);

module.exports = router;
