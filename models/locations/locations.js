var abstract = require('../abstract');
const Location = require ('./locations-schema');
var controller = abstract(Location);

/*
  TODO's:
    - SLOT CRUD
    - Make it upsert call instead of create {upsertion will be based on locationName = name} 
    - make updation for loations [Wajahat]
    - Introduce Abstract Class [Manzar]
*/

controller.create = (req, res) =>   {
    var query = req.body.id ? {_id : req.body.id} : {name:req.body.name}
    Location.update(query, req.body, {upsert: true}, function(err, model) { 
    if(err) { return res.send(err); }
    console.log('abstract models : ',model)
    return res.status(200).json(model);
    });
}

controller.update = (req, res) =>   {
  Location.updateOne({"_id" : req.body._id}, {$set: {'name': req.body.name,'slotsData':req.body.slotsData}}, function(err, model) {
      if(err) { return res.status(404).send(err); 
    } else {
      // console.log(model,'responce')
      return res.status(200).json(model);
    }
  })

}

module.exports = controller;