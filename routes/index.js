const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/Home');

router.get('/',Home_Controller.home);
router.post('/create',Home_Controller.create);


module.exports = router;