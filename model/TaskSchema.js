var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./TaskSchema');

var TaskSchema = new Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    }
});

module.exports = mongoose.model('tasks', TaskSchema);