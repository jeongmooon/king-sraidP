const express = require("express");const router = express.Router();

// 이미지 업로드 경로
// const upload = require("../../modules/awsUpload");

// 생성
router.post("/");

// 읽기
router.get("/");

// 삭제
router.delete("/:id");

// 수정
router.put("/:id");

// 검색
router.get("/:id");

//이미지 업로드
router.post("/images", upload.single("img"));

module.exports = router;
