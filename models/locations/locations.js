var abstract = require('../abstract');
const Location = require ('./locations-schema');
var controller = abstract(Location);
var pushNoti = require('../pushNotification');

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

controller.sendOneSignalNoti = (req, res) => {

    let msg = "OneSignal Notification has been sent"
    var message = {
      app_id: process.env.SIGNALONE_APP_ID,
      contents: { "en":  msg},
     // included_segments: ["Subscribed Users"]
      include_player_ids: [req.body.OneToken]
  };
  console.log(message)
  debugger
  pushNoti(message)
  
}

module.exports = controller;