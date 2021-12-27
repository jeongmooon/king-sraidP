const express = require('express');
const { loginUser, createUser } = require('../../controller/auth/user/userController');
const router= express.Router();

// 회원가입
router.post('/signup', createUser)

// 로그인
router.post('/signin', loginUser)

module.exports = router;