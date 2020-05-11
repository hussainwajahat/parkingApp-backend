var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
//user Schema
var userSchema=mongoose.Schema({
    password:
    {
        type:String
    },
    email:{
        type:String,
        require:true
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
