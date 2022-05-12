const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const BuyerRoute = require('./routes/Buyers');
const UserRoute = require('./routes/Users');

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//DB Connection
const port = process.env.PORT || 3100;
const uri = process.env.MONGO_URI;

app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: false }));

//DB Connection
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

app.use('/', BuyerRoute);
app.use('/use',UserRoute);

app.listen(port, () =>{
    console.log("Server is starting on port " + port);
});

