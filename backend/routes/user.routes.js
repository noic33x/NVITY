const express = require('express');
const router = express.Router();

//import controller
const {register, login} = require('../controller/user.controller');

router.post('/register', register)
router.post('/login', login)


module.exports = router;