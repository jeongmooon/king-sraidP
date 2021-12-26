const express = require('express');
const { createAdmin } = require('../../controller/auth/admin/adminController');
const router= express.Router();

// 회원가입
router.post('/signup', createAdmin)

// 로그인
// router.post('/signin')

module.exports = router;