const express = require("express");
const Item = require("../models/itemModel");

/*const path = require('path');
const multer = require('multer');*/

const router = express.Router();

//router.use(express.static('/uploads'));

//router.use("/uploads", express.static(path.join("image")));

/*upload = multer({
	storage: multer.diskStorage ({
		destination: (req, file, cb) =>{
			cb (null, './uploads');
		},
    filename : function(req, file, callBack){
			callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
		}
	})
});*/

/*router.post('/post', upload.single('image'), (req, res) => {
	console.log(req.file);
	const itemModel = new Item({
		itemType: req.body.itemType,
		itemName: req.body.itemName,
		quantity: req.body.quantity,
		price: req.body.price,
		image: req.file.filename,
	}); 
	itemModel.save().then(createdItem => {
		res.status(201).json({
		  message: "Item added successfully",
		  itemId: createdItem._id
		});
	});
});*/




router.post("/add", (req, res, next) => {
  const itemModel = new Item({
    itemType: req.body.itemType,
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  itemModel.save().then(createdItem => {
    res.status(201).json({
      message: "Item added successfully",
      itemId: createdItem._id
    });
  });
});


router.put("/:id", (req, res, next) => {
  const itemModel = new Item({
    _id: req.body.id,
    itemType: req.body.itemType,
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  Item.updateOne({_id: req.params.id }, itemModel).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});



router.get("", (req, res, next) => {
    Item.find().then(documents => {
    res.status(200).json({
      message: "Items fetched successfully!",
      items: documents
    });
  });
});


router.get("/:id", (req, res, next) => {
    Item.findById(req.params.id).then(itemModel => {
    if (itemModel) {
      res.status(200).json(itemModel);
    } else {
      res.status(404).json({message: 'Item not found!'});
    }
  })
});


router.delete("/:id", (req, res, next) => {
    Item.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Item deleted!" });
  });
});


module.exports = router;
