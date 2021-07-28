const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.send('Login Page'));

//Register Page 
router.get('/register', (req, res) => res.send('Register Page'));



module.exports = router;