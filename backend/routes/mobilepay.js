const express = require("express");
const MobilePay = require("../models/MobilePay");

const router = express.Router();

//add mobile payment details to the database========================================
router.post('/', async (req, res) => {
    const {phone, amount, pin} = req.body;
    let pay = {
        "phone" : phone,
        "amount" : amount,
        "pin" : pin,
    };
    try{
        let newpayModel = new MobilePay(pay);
        await newpayModel.save();
        res.json({Message: 'Value inserted', Result: newpayModel});
    }catch (error) {
        res.status(500).send("Mobile payment not added");
    }
})


//Get all mobile payments==========================================================
router.get('/getAll', async (req,res) => {
    try{
        const data = await MobilePay.find();
        res.json({Message : "All results fetched", Result: data})
    } catch (errror) {
        res.status(500).send("Cannot fetch all data");
    }
})

//Get a payment ===================================================================
router.get('/get', async (req,res) => {
    const{id} = req.body;
    try{
        const pay = await MobilePay.findById(id);
        res.json({Message: "Payment recieved", Result: pay});
    } catch (error) {
        res.status(500).send("Cannot get the Payment");
    }
})

//Delete payment =================================================================
router.delete('/deleteMpay', async(req,res) => {
    const{id} = req.body;
    try{
        const pay = await MobilePay.findById(id);
        await pay.remove();
        res.json({Message: "Payment deleted", Result: pay});
    } catch (error) {
        res.status(500).send("Cannot delete Payment Details");
    }
})

//Update payment Details =========================================================
router.put('/update/:id', async (req, res) => {
    const{id} = req.params;
    const {phone, amount, pin} = req.body;
    let data = {
        "phone" : phone,
        "amount" : amount,
        "pin" : pin,
    };
    try{
        const pay = await MobilePay.findByIdAndUpdate(id, data);
        res.json({Message: "Payment Updated Successfully..."});
    } catch (error) {
        res.status(500).send("Payment Not Updated")
    }
})


//=================================================================================
  module.exports = router;
//================================================================================