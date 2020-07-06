
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var garageSchema = new Schema({
    location : String,
    name : String,
    ownerName : String,
    cellNo : String,
    days : Array,
    rate : String,
    hour : String,
    count : {
                type : Number,
                default : 0
            },
    ApprovalStatus : {
                        type : Boolean,
                        default : false
                    },
    garageDate : {
                    type : Date,
                    default : new Date()
                    }
});
module.exports = mongoose.model('garages', garageSchema);
