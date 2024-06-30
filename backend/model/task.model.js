const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    priority: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Task', taskSchema);