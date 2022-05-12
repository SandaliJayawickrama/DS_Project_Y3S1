const router = require('express').Router();
const BuyerRouter = require('../models/Buyer');

router.post('/api/buyer', async(req,res) => {
    try {
        const newBuyer = new BuyerRouter({
            item: req.body.item
        })
        const saveBuyer = await newBuyer.save()
        res.status(200).json(saveBuyer);
    } catch (err) {
        res.json(err);
    }
})


module.exports = router;