const express = require("express");const { createMainPost, readMainPost, deleteMainPost } = require("../../controller/board/mainController");
const router = express.Router();

// 이미지 업로드 경로
// const upload = require("../../modules/awsUpload");

// 생성
router.post("/", createMainPost);

// 읽기
router.get("/",readMainPost);

// 삭제
router.delete("/:id", deleteMainPost);

// 수정
router.put("/:id");

// 검색
router.get("/:id");

//이미지 업로드
// router.post("/images", upload.single("img"));

module.exports = router;
