const express = require('express');
const { readChat, createChat } = require('../../controller/chat/chatController');
const router= express.Router();

// 채팅 불러오기
router.get('/', readChat)

// 채팅 저장하기
router.post('/', createChat)

module.exports = router;