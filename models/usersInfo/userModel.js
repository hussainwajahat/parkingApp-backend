

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var garageSchema = new Schema({
    userScehmaId :{
        type : Schema.Types.ObjectId,
        ref: 'user'
      },
    userType: {
        type: String
    },
    name:{
        type : String
    } ,
    cellNo: {
        type : String
    },
    city: {
        type : String
    },
    address: {
        type : String
    },
    OneToken: {
        type : String
    }
});
module.exports = mongoose.model('user_info', garageSchema);

