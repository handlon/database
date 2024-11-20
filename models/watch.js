const mongoose = require('mongoose');

const schema = mongoose.Schema({
    brand: {type: String, required: true},
    type: { type:String, required:true},
    price: {type:Number, required: true}
});

module.exports = mongoose.model("watch", schema);