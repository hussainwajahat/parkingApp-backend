var mongoose = require('mongoose');
//tourist Schema
var locations=mongoose.Schema({
    text:
    {
        type:String
    },
    slots:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model('locations',locations);