var abstract = require('../abstract');
var UserInfo = require('./userModel');
var controller = abstract(UserInfo);

controller.createUser = function(req,res){

      controller.create(req,res);
}

  controller.findUser= (req,res,next)=>{
    //console.log('i m here',model);
    //return res.status(200).json({status:true,model:model});
    controller.findByCondition(req,res,(req,res,model)=>{
      return res.status(200).json({status:true,model:model});
    });
  }
module.exports = controller;
