const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    price: { type:Number, required:true},
    antidandruff: {type:Boolean, required: true}
});



module.exports = mongoose.model("shampoos", schema);
