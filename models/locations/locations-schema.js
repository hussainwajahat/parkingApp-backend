var mongoose = require('mongoose');
//tourist Schema
var locations=mongoose.Schema({
    name:
    {
        type:String
    },
    slots:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model('locations',locations);