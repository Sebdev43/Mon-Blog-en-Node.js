const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/', controller.home);

router.get('/article/:id', controller.article);

module.exports = router;