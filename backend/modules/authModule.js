const userModel = require("../models/auth/user");
const jwtModule = require('./jwtMoudule')

const authModule = {
  loggedIn: async (req, res, next) => {
    const accessToken = req.headers.authorization;
    console.log(accessToken);

    if (!accessToken) {
      res.status(409).json({
        msessage: "토큰 없음",
      });
      return;
    }

    const decoded = jwtModule.verify(accessToken);
    if (decoded === -1) {
      return res.status(409).json({
        message: "만료된 토큰 입니다",
      });
    } else if (decoded === -2) {
      return res.status(409).json({
        message: "유효하지 않는 토큰 입니다",
      });
    } else if (decoded === -3) {
      return res.status(409).json({
        message: "에러 토큰",
      });
    }
    let userInfo;

    try {
      userInfo = await userModel.findOne({ _id: decoded.objId });
      if (!userInfo) {
        return res.status(401).json({
          message: "일치하지 않는 유저임니다",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "유효하지 않는 유저 입니다",
      });
    }
    console.log(userInfo)

    req.userInfo = userInfo;
    next();
  },
};

module.exports = authModule;
