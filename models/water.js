const mongoose = require('mongoose');

const schema = mongoose.Schema({
    amount: {type:Number, required: true},
    type: {type: String, required: true},
    taste: { type:String, required:true}
    
});

module.exports = mongoose.model("water", schema);