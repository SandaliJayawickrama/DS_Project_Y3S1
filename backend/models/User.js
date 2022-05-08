const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    coNumber: { type: Number, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY,{expiresIn:"30d"})
    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        coNumber:Joi.number().required().label("Mobile Number"),
        email:Joi.string().required().label("E-mail Address"),
        street:Joi.string().required().label("Street Name"),
        city:Joi.string().email().required().label("City"),
        province:Joi.string().required().label("Province"),
        password:passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = {User, validate};