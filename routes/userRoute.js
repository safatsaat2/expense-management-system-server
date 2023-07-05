import { loginController, registerController } from '../controllers/userController'

const express = require('express')

//  router Object

const router = express.Router()

// routes
//  POST || LogIn

router.post('/login', loginController)

// POST || Register

router.post('/register', registerController)

export default router