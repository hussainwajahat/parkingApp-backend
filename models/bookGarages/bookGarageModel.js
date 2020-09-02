
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bookSchema = new Schema({

  garageId : {
    type : Schema.Types.ObjectId,
    ref: 'garages'
  },
  isBooked : Boolean,
  day : String,
  timing : String,
  bookDate : Date

});
module.exports = mongoose.model('book_garages', bookSchema);
