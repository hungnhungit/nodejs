var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Task = require('./TaskSchema.js');


var UserSchema = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    task : [{
    	type : Schema.Types.ObjectId,
    	ref : 'tasks'
    }]
});

module.exports = mongoose.model('users', UserSchema);