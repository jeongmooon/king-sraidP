const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersModels = new Schema({
  userId :{
      type:String,
      required: true,
      unique: true,
  },
  // 비밀번호
  password: {
    type: String,
    required: true,
  },
  // 이메일
  email: {
    type: String,
    required: true,
  },
  // salt값
  salt :{
    type :String,
    required:true,
  },
  // 비밀번호 불일치 횟수
  signinCount:{
    type: Number,
    default:0
  },
  // 잠굼 기능
  lockAccount:{
    type:Boolean,
    default:false
  },
  // 생성 날짜
  createDate: {
    type: Date,
    required: true,
  },

});

module.exports = mongoose.model("users", usersModels);
