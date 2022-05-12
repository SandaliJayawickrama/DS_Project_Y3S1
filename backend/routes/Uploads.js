const router = require('express').Router();
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const BuyerRouter = require('../models/Buyer');

const storage = new GridFsStorage({
    url:process.env.MONGO_URI,
    options: 
        {
            useNewUrlParser:true, 
            useUnifiedTopology: true
        },
    file: (req,res) => {
        const match = ["image/png","image/jpeg"];

        if(match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos", 
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
})

module.exports = multer({storage});