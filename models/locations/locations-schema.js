var mongoose = require('mongoose');
//tourist Schema
var locations=mongoose.Schema({
    name:
    {
        type:String
    },
    slots:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model('locations',locations);