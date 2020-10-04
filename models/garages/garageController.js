var abstract = require('../abstract');
var Garage = require('./garageModel');
var controller = abstract(Garage);

controller.createGarage = (req, res) =>   {
    req.body['garageDate'] = new Date()
    var query = req.body.id ? {_id : req.body.id} : {location:req.body.location,userSchema:req.body.userInfoId}
    Garage.findOneAndUpdate(query, req.body, {upsert: true}, function(err, model) { 
    if(err) { return res.send(err); }
    console.log('abstract models : ',model)
    return res.status(200).json(model);
    });
}

controller.index = (req,res) => {

  Garage.find({},function(err,model){
    if(err) { return res.send(err); }
    return res.status(200).json(model);
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
