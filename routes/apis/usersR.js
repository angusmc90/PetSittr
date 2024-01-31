const express = require('express');
const router = express.Router;
const usersCntrl = require('../../controllers/usersC')

const multer = require ('multer');
const upload = multer();

router.post('/signup', upload.single('photo'), userCntrl.signup)
router.post('/login', upload.single('photo'), userCntrl.login)

module.exports = router;