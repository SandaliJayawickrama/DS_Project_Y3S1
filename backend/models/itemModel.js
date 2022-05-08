const mongoose = require('mongoose');

const itemsList = mongoose.Schema({
  itemType: { type: String, required: true},
  itemName: { type: String, required: true},
  quantity: { type: String, required: true},
  price: { type: String, required: true},
  //image: { type: String, required: true},
});


module.exports =  mongoose.model('Items', itemsList );

