const express = require('express')
const authModule = require('../../modules/authModule')
const userLoginController = require('../../controller/loginCheckt/userLoginController')
const router = express.Router();

// 조회하기
router.get('/', authModule.loggedIn, userLoginController.getLoginInfo)



module.exports = router;