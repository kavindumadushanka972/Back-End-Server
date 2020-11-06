var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'} //mongoDB automatically creates an ID
});

module.exports = mongoose.model('Message', schema); //this will automatically create a collection called 'messages'