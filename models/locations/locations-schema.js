var mongoose = require('mongoose');
//slots Schema
var locations=mongoose.Schema({
    name:String,
    slotsData : Array
});

module.exports=mongoose.model('locations',locations);