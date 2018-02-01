const express = require('express');
const router = express.Router();
const path = require('path');
const {upload} = require('./controller.js')
router.post('/upload',upload);

module.exports = router;