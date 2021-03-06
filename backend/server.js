const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const DoctorRoutes = require("./routes/doctors");

const ItemRoutes = require("./routes/itemRoute");

const MobilePay = require("./routes/mobilepay");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3100;
const uri = process.env.MONGO_URI;

app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: false }));

app.use("/api/doctors" , DoctorRoutes);
app.use("/itemadd" , ItemRoutes);

//For mobile payment
app.use('/api/mobilepay' , MobilePay);

//DB Connection
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

app.listen(port, () =>{
    console.log("Server is starting on port " + port);
});

