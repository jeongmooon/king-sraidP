const { OK, NO_ACCOUNT } = require("../../modules/stautsModule");

const loginCheckController = {
    getLoginInfo: (req, res) => {
      const loginInfo = req.userInfo;
  
      if (!loginInfo) {
        res.status(NO_ACCOUNT).json({
          message: "유저정보가 없음",
        });
        return;
      }
  
      res.status(OK).json({
        message: "유저 조회 성공",
        data: loginInfo,
      });
    },
  };
  
  module.exports = loginCheckController;