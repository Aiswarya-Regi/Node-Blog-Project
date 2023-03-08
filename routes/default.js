const express = require('express');
const router = express.Router();
const {getAllAPIEndPoints} = require('../controllers/default');

router.get('/', getAllAPIEndPoints);


module.exports = router;