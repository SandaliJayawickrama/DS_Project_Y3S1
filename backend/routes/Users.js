const express = require('express');
const { signup, login, verifyToken, getuser , refreshToken} = require('../controllers/UserController');

const router = express.Router();
const User = require('../models/User');

router.post('/signup',  signup);
router.post('/login',  login);
router.get('/user',verifyToken , getuser);
router.get('/refresh', refreshToken,verifyToken,getuser);

module.exports = router;