const express = require('express');
const { loginUser, createUser, findUser } = require('../../controller/auth/user/userController');
const router= express.Router();

// 회원가입
router.post('/signup', createUser)

// 로그인
router.post('/signin', loginUser)

// 유저찾기
router.post('/:id', findUser)

module.exports = router;