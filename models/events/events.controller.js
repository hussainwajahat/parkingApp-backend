//var abstract = require('../abstract');
// var Garage = require('./garageModel');
//var controller = abstract(Garage);

var controller = {}

controller.index = (req,res) => {
  res.send('recieved request')
}

controller.create = (req,res) => {
  const _io = req.io;
  _io.emit('updateDobSSN',req.body);  
}
module.exports = controller;
