const mongoose = require("mongoose")

const MPay = new mongoose.Schema(
    {
    phone: {type: String, required: true},
    amount: {type: String, required: true},
    pin: {type: String, required: true},
    }
)

// const MPay = new mongoose.Schema({
//     phone: {type:String, require:true},
//     amount: {type:String, require:true},
//     pin: {type:String, require:true},
// })

module.exports = mongoose.model("MPay", MPay)