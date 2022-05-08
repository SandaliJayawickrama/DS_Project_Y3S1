const mongoose = require("mongoose")

var MPay = new mongoose.Schema(
    {
    phone: {type: String, required:true, default:'phone', trim: true},
    amount: {type: String, required:true, default:'amount', trim: true},
    pin: {type: String, required:true, default:'pin', trim: true},
    }
)

// const MPay = new mongoose.Schema({
//     phone: {type:String, require:true},
//     amount: {type:String, require:true},
//     pin: {type:String, require:true},
// })

module.exports = mongoose.model('mpays', MPay);