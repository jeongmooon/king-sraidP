const express = require('express')
const router= express.Router();

// 회원가입
router.post('/signup')

// 로그인
router.post('/signin')

module.exports = router;