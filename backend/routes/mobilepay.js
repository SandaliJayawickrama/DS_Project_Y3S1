const express = require("express");
const MobilePay = require("../models/MobilePay.js");

const router = express.Router();

router.post('/', async (req, res) => {
    const {phone, amount, pin} = req.body;
    try{
        const newMPay = await MobilePay.create({phone, amount, pin});
        res.json({Message: 'Value inserted', Result: newMPay})
    }catch (error){
        res.status(500).send("Payment Haven't added");
    }
})


// router.post("/", (req, res) => {
//     const mpay = new MobilePay({
//       mobile: req.body.mobile,
//       amount: req.body.amount,
//       pin: req.body.pin,
//     });
//     mpay.save().then(result => {
//       res.status(201).json({
//         message: "Schedule added successfully",
//         Result : result
//       });
//     });
//   });


  module.exports = router;