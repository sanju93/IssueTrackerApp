const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/Home');

router.get('/',Home_Controller.home);
router.post('/create_project',Home_Controller.createProject);
router.get('/projects',Home_Controller.fetchProjects);
router.get('/create_issue/:id',Home_Controller.getIssue);


module.exports = router;