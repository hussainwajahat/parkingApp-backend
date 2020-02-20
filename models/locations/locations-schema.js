var mongoose = require('mongoose');
//tourist Schema
var locations=mongoose.Schema({
    name:
    {
        type:String
    },
    slots:[]
});

module.exports=mongoose.model('locations',locations);