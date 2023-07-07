
const express = require('express')
const {
    loginController,
    registerController,
  } = require("../controllers/userController");


//  router Object

const router = express.Router()

// routes
//  POST || LogIn

router.post('/login', loginController)

// POST || Register

router.post('/register', registerController)

module.exports = router;