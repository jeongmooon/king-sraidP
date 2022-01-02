import { OK, OVER_ACCOUNT } from "../../modules/stautsModule";

const userLoginController = {
    getLoginInfo : (req, res)=>{
        const loginInfo = req.userInfo;

        if(!loginInfo) {
            res.status(OVER_ACCOUNT).json({
                message : "유저정보 없음"
            })
            return
        }

        res.status(OK).json({
            message:"유저정보 조회 성공",
            data : loginInfo
        })
    },
};

module.exports = userLoginController;