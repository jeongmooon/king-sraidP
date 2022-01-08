const express = require('express');
const { loginUser, createUser, findUser, updateUser } = require('../../controller/auth/user/userController');
const upload = require('../../modules/awsUpload');
const router= express.Router();

// 회원가입
router.post('/signup', createUser)

// 로그인
router.post('/signin', loginUser)

// 유저찾기
router.post('/:id', findUser)

// 업데이트
router.put("/:id", upload.single("img"), updateUser)

module.exports = router;