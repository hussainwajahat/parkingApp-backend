const express = require('express');
const user = require('./userController');
const router = express.Router();

/* GET home page. */
console.log('Required User');

router.get('/', user.index);
router.post('/createUser', user.create);
router.post('/updateUser', user.create);
router.post('/con',user.findUser);
router.delete('/:id',user.destroy);

module.exports = router;
