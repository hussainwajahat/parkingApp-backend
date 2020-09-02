var abstract = require('../abstract');
var Garage = require('./bookGarageModel');
var controller = abstract(Garage);

controller.garageBooking = (req, res) =>   {
    req.body['bookDate'] = new Date();
    req.body['isBooked'] = false;
    controller.create(req,res);
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
