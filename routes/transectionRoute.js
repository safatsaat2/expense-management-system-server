
const express = require('express');
const { addTransection, getTransection } = require('../controllers/transectionCtrl');



//  router Object

const router = express.Router()

// routes

// Add transection || POST

router.post('/add-transection', addTransection)

// Edit transection || POST

router.post('/edit-transection', editTransection)

// Get Transection || Get

router.post('/get-transection', getTransection)


module.exports = router;