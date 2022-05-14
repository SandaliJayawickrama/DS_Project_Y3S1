const mongoose = require("mongoose")

var MPay = new mongoose.Schema(
    {
    phone: {type: String, required:true, default: 'default No', trim: true},
    amount: {type: String, required:true, default:'default 1200', trim: true},
    pin: {type: String, required:true, default:'default 123456', trim: true},
    }
)

// const MPay = new mongoose.Schema({
//     phone: {type:String, require:true},
//     amount: {type:String, require:true},
//     pin: {type:String, require:true},
// })

module.exports = mongoose.model('mpays', MPay);