var abstract = require('../abstract');
var UserInfo = require('./userModel');
var controller = abstract(UserInfo);
var mongoose = require('mongoose');

controller.createUser = function(req,res){

      controller.create(req,res);
}
controller.findUser= (req,res,next)=>{

    controller.findByCondition(req,res,(req,res,model)=>{
    return res.status(200).json({status:true,model:model});
  });
}


controller.updateToken = function(req, res) {
    
    var query = {userScehmaId : mongoose.Types.ObjectId(req.userScehmaId)} 
    console.log(query)
    UserInfo.findOneAndUpdate(query,{$set:{"OneToken": req.OneToken}},{new:true} ,function(err, model) {
       
    if(err) { return res.send(err); }
    console.log('abstract models : ',model)
    if(model === null){
      return res.status(200).json({status:false,model:model});
    }else{
      return res.status(200).json({status:true,model:model});
    }
    });
}
module.exports = controller;
