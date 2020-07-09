var abstract = require('../abstract');
var Garage = require('./userModel');
var controller = abstract(Garage);
var crypto = require('crypto');

controller.createTeam = function(req,res){

  var data = req.body
  console.log(data)
  var query = {"email":data.email};
  // console.log(query)

  TEAM.find(query,function(err,result){
    // debugger;
    if(result.length > 0){

      return res.status(200).json({status:true,message:"This user is already registered"});

    }else{

      var hash = crypto.createHash('md5').update(data.Password).digest('hex');
      data.Password = hash
      //  console.log(data)
      req.body= data;
      //console.log(req.body)
      controller.create(req,res);

    }

  })

}

  controller.findGarage= (req,res,next)=>{
    //console.log('i m here',model);
    //return res.status(200).json({status:true,model:model});
    controller.findByCondition(req,res,(req,res,model)=>{
      return res.status(200).json({status:true,model:model});
    });
  }
module.exports = controller;
