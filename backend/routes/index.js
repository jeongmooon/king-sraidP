var express = require('express');
var router = express.Router();

router.use('/admin', require('./admin'))
router.use('/auth', require('./auth'))
// router.use('/main', require('./main'))

module.exports = router;
