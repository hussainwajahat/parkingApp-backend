var mongoose = require('mongoose');
//tourist Schema
var locations=mongoose.Schema({
    name:String,
    slotsData : Array
});

module.exports=mongoose.model('locations',locations);