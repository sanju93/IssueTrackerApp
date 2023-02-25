const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/Home');

router.get('/',Home_Controller.home);


module.exports = router;