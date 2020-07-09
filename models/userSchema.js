var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
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



userSchema.methods.generateHash = function (password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}

userSchema.methods.validPassword = function (password){
	console.log (bcrypt.compareSync(password,this.password))
	return bcrypt.compareSync(password,this.password);
}

module.exports=mongoose.model('user',userSchema);
