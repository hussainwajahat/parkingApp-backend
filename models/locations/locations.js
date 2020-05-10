const Location = require ('./locations-schema');
var controller = {}

/*
  TODO's:
    - SLOT CRUD
    - Make it upsert call instead of create {upsertion will be based on locationName = name} 
    - make updation for loations [Wajahat]
    - Introduce Abstract Class [Manzar]
*/
controller.getLocations = (req, res) =>   {
    Location.find({
    }, function(err, lists) {
      return res.json(lists);
    });
  };

controller.create = (req, res) =>   {
    Location.create(req.body, function(err, model) { 
    if(err) { return res.send(err); }
    console.log('abstract models : ',model)
    return res.status(200).json(model);
    });
}

module.exports = controller;