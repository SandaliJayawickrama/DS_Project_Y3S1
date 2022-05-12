const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Buyers', buyerSchema);