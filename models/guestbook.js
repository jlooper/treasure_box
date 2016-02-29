var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var guestbookSchema = new Schema({
  locale: String,
  message: String,
  box: String,
  date: Date,
  name: String
});
 
module.exports = mongoose.model('Guestbook', guestbookSchema);