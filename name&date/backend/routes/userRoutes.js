const express = require('express');
const { adduser, allusers } = require('../Controllers/Usercontrollers');

const router = express.Router();

// Define route for adding a user
router.post('/adduser', adduser);

// Define route for getting all users
router.get('/allusers', allusers);

module.exports = router;
