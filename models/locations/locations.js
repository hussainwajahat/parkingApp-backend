const Location = require ('./locations-schema');
var controller = {}

controller.getLocations = (req, res) =>   {
    Location.find({
    }, function(err, lists) {
      return res.json(lists);
    });
  };

controller.create = (req, res) =>   {
    Location.create(req.body, function(err, model) { console.log(req.body,'actal payload fronm ingestion api')
    if(err) { return handleError(res, err); }
    console.log('abstract models : ',model)
    return res.status(201).json(model);
    });
}

module.exports = controller;