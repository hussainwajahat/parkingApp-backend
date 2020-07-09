var mongoose = require('mongoose');
//user Schema
var userSchema=mongoose.Schema({
    password:
    {
        type:String
    },
    userType: {
        type: String,
        default: "Customer"
    },
    email:{
        type:String,
        require:true
    },
    name:{
        type : String
    } ,
    cellNo: {
        type : String
    },
    city: {
        type : String
    }

});
module.exports=mongoose.model('user',userSchema);
