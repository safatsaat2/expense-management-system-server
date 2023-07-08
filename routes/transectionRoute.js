
const express = require('express');
const { addTransection, getTransection } = require('../controllers/transectionCtrl');



//  router Object

const router = express.Router()

// routes

// Add transection || POST

router.post('/add-transection', addTransection)

// Get Transection || Get

router.get('/get-transection', getTransection)


module.exports = router;