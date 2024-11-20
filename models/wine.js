const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    type: { type:String, required:true},
    amount: {type:Number, required: true}
});

module.exports = mongoose.model("wine", schema);