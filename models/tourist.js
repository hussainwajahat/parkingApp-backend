var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
//tourist Schema
var touristschema=mongoose.Schema({
    password:
    {
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    contactNo:{
        type:String
    },
    email:{
        type:String,
        require:true
    }
});



touristschema.methods.generateHash = function (password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}

touristschema.methods.validPassword = function (password){
	console.log (bcrypt.compareSync(password,this.password))
	return bcrypt.compareSync(password,this.password);
}

module.exports=mongoose.model('tourist',touristschema);
//get Tourist
module.exports.getTourist=function(callback,limit){
    Tourist.find(callback).limit(limit);
    //Tour.find(callback);
    //console.log(callback);
}

module.exports.getTouristById=function(id,callback){
    Tourist.findOne(id,callback);
    //Tour.find(callback);
    //console.log(callback);
}

module.exports.addTourist=function(tourist,callback){
    Tourist.create(tourist,callback);
    //Tour.find(callback);
    //console.log(callback);
}
  
module.exports.updateTourist=function(id,tourist,options,callback){
    var query=Tourist.findOne({_id : id });
    var update = {
        firstName:tourist.firstName,
        lastName:tourist.lastName,
        password:touristschema.methods.generateHash(tourist.password),
        contactNo:tourist.contactNo
    } 
    Tourist.findOneAndUpdate(query,update,options,callback);
    //Tour.find(callback);
    //console.log(callback);
}

module.exports.deleteTourist=function(id,callback){
    //var query=Tourist.findOne(id);
    Tourist.deleteOne(id,callback);
    //Tour.find(callback);
    //console.log(callback);
}
