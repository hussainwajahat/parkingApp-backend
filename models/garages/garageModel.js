
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var garageSchema = new Schema({
    location : String,
    days : Array,
    rate : String,
    timing : Array,
    count : {
                type : Number,
                default : 0
            },
    ApprovalStatus : {
                        type : Boolean,
                        default : false
                    },
    garageDate : Date,
    userSchema : {
    type : Schema.Types.ObjectId,
    ref: 'user_info'
  }

});
module.exports = mongoose.model('garages', garageSchema);
