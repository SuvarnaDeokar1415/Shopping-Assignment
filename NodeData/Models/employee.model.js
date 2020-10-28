const mongoose = require ('mongoose');

var Product = mongoose.model('Product',{
    name: { type : String },
    description: { type : String },
    price: { type : Number },
    imageUrl: {type : String}
});
module.exports = { Product };