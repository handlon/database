const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    date: { type:String, required:true},
    producer: {type:String, required: true}
});

module.exports = mongoose.model("platforms", schema);